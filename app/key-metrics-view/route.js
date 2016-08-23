import Ember from 'ember';

export default Ember.Route.extend({
  data: Ember.inject.service('csv-parser'),

 	model() {

    /* poll every 2000 ms to see if any of the data changed! */
		var self = this;
		(function poll() {
			setTimeout(function() {
				self.refresh();
			}, 2000);
		}) ();

    /* returning all the needed data into one model with 3 different parts */
    return Ember.RSVP.hash({
      line: Ember.$.get('data/open-issues-line.json'),
      bar: Ember.$.get('data/reported-issues-bar.json'),
      openIssues: this.get('data').model().then(this.countIssues)
    });

 	},

  /* function to call in order to count number of open issues in data*/
  countIssues: function(items) {
      var issues = 0;
      items.data.forEach(function(item) {
        if (item.status === 'open') {
          issues++;
        }
      });
      return issues;
    }


});
