import { PersonController } from './model/Person';
import { LocationModalController } from './model/LocationModal';
import { MapService } from './service/Map';

let moduleName = 'Mappu';

angular
  .module(moduleName, ['ui.bootstrap'])
  .controller('personController', PersonController)
  .controller('LocationModalCtrl', LocationModalController)
  .factory('map', MapService);
