import { PersonController } from './model/Person';
import { ModalInstanceController } from './model/ModalInstance';

let moduleName = 'Mappu';

angular
  .module(moduleName, ['ui.bootstrap'])
  .controller('personController', PersonController)
  .controller('ModalInstanceCtrl', ModalInstanceController);
