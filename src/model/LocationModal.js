import { Button } from '../Button';

/**
 * Location Modal Controller.
 */
class LocationModalController {
  constructor($scope, $modalInstance, map) {
    this.scope = $scope;
    this.modalInstance = $modalInstance;

    this.scope.title = 'Location';
    this.scope.body = 'How would you like to mark your location on the map?';
    this.scope.button1 = new Button('Use GPS', () => {
      map.locate();
      this.scope.close();
    });

    this.scope.button2 = new Button('Manual', () => {
      this.scope.close();
    });

    this.scope.close = () => {
      this.modalInstance.dismiss();
    };
  }
}

LocationModalController.$inject = ['$scope', '$modalInstance', 'map'];

export { LocationModalController };
