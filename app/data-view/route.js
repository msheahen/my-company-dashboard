import Ember from 'ember';

export default Ember.Route.extend({
  data: Ember.inject.service('csv-parser'),


  model() {

    var self = this;

      Ember.run.later((function() {
        self.refresh();
      }), 3000);

      return this.get('data').model();
  }

});
