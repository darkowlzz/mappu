import { PersonController } from './model/Person';
import { LocationModalController,
         ManualLocationModalController } from './model/LocationModal';
import { MapService } from './service/Map';

let moduleName = 'Mappu';

angular
  .module(moduleName, ['ui.bootstrap'])
  .controller('personController', PersonController)
  .controller('LocationModalCtrl', LocationModalController)
  .controller('ManualLocationModalCtrl', ManualLocationModalController)
  .factory('map', MapService);
