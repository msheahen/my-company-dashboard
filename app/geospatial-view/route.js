import Ember from 'ember';

export default Ember.Route.extend({
  model() {

		var self = this;
    
    (function poll() {
      Ember.run.later((function() {
        self.refresh();
      }), 3000);
		}) ();

    return Ember.$.get('data/geo-data.json');

 	}

});
