import Ember from 'ember';

export default Ember.Route.extend({
  model() {

		var self = this;
		(function poll() {
			setTimeout(function() {
				self.refresh();
      }, 2000);
		}) ();

    return Ember.$.get('data/geo-data.json');

 	}

});
