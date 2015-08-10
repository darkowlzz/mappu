import { Button, InputBox } from '../Elements';

/**
 * Location Modal Controller.
 */
class LocationModalController {
  constructor($scope, $modalInstance, $modal, map) {
    this.scope = $scope;
    this.modalInstance = $modalInstance;
    this.modal = $modal;

    this.scope.title = 'Location';
    this.scope.body = 'How would you like to mark your location on the map?';
    this.scope.button1 = new Button('Use GPS', () => {
      map.locate();
      this.scope.close();
    });

    this.scope.button2 = new Button('Manual', () => {
      this.getCoordinates();
      this.scope.close();
    });

    this.scope.close = () => {
      this.modalInstance.dismiss();
    };
  }

  // Open the manual coordinates entry wizard (modal).
  getCoordinates() {
    let modalInstance = this.modal.open({
      animation: true,
      templateUrl: 'modalView.html',
      controller: 'ManualLocationModalCtrl',
      size: 'lg'
    })
  }
}

LocationModalController.$inject = ['$scope', '$modalInstance', '$modal', 'map'];


/**
 * Manual Location Modal Controller.
 */
class ManualLocationModalController {
  constructor($scope, $modalInstance, map) {
    this.scope = $scope;
    this.modalInstance = $modalInstance;

    this.scope.title = 'GPS Coordinates';
    this.scope.body = 'Enter your GPS coordinates';

    this.scope.input1 = new InputBox('Lat', 'Latitude');
    this.scope.input2 = new InputBox('Lng', 'Longitude');

    this.scope.button1 = new Button('Use the coordinates', () => {});
    this.scope.button2 = new Button('Mark on map', () => {});

    this.scope.close = () => {
      this.modalInstance.dismiss();
    };
  }
}

ManualLocationModalController.$inject = ['$scope', '$modalInstance', 'map'];


export { LocationModalController, ManualLocationModalController };
