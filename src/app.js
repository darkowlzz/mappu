import { PersonController } from './model/Person';

let moduleName = 'Mappu';

angular
  .module(moduleName, ['ui.bootstrap'])
  .controller('personController', PersonController);
