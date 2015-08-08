import { PersonController } from './model/Person';
import { ModalInstanceController } from './model/ModalInstance';
import { MapService } from './service/Map';

let moduleName = 'Mappu';

angular
  .module(moduleName, ['ui.bootstrap'])
  .controller('personController', PersonController)
  .controller('ModalInstanceCtrl', ModalInstanceController)
  .factory('map', MapService);
