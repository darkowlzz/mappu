import { startUp, AUTH_CONST } from './startup';
import { AUTH_EVENTS } from './constant';

import { MainController } from './controllers/Main';
import { LocationModalController,
         ManualLocationModalController } from './controllers/LocationModal';

import { MapService } from './services/Map';
import { AuthService } from './services/Auth';
import { SessionService } from './services/Session';

let moduleName = 'Mappu';

angular
  .module(moduleName, ['ui.bootstrap', 'ui.router'])
  .controller('MainCtrl', MainController)
  .controller('LocationModalCtrl', LocationModalController)
  .controller('ManualLocationModalCtrl', ManualLocationModalController)
  .factory('map', MapService)
  .factory('Auth', AuthService)
  .factory('Session', SessionService)
  .constant('AUTH_EVENTS', AUTH_EVENTS)
  .run(startUp);
