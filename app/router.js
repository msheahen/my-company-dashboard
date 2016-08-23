import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('data-view');
  this.route('geospatial-view');
  this.route('key-metrics-view');
});

export default Router;
