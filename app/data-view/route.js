import Ember from 'ember';

export default Ember.Route.extend({
  data: Ember.inject.service('csv-parser'),

  model() {

    var self = this;
    (function poll() {
      setTimeout(function() {
        self.refresh();
      }, 2000);
    }) ();

    return this.get('data').model();
  }
});
