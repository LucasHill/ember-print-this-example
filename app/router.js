import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('basic-auto');
  this.route('custom-selector');
  this.route('custom-options');
  this.route('service');
});

export default Router;
