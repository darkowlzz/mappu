class LocationModalController {
  constructor($scope, $modalInstance, map) {
    this.scope = $scope;
    this.modalInstance = $modalInstance;

    this.scope.title = 'Location';
    this.scope.body = 'How would you like to mark your location on the map';
    this.scope.button1Enabled = true;
    this.scope.button2Enabled = true;
    this.scope.button1 = 'Use GPS';
    this.scope.button2 = 'Manual';

    this.createButton();

    let that = this;

    this.scope.btn1Click = function () {
      map.locate();
      that.scope.close();
    };

    this.scope.btn2Click = function () {
      that.scope.close();
    };

    this.scope.close = function () {
      that.modalInstance.dismiss();
    };
  }

}

LocationModalController.$inject = ['$scope', '$modalInstance', 'map'];

export { LocationModalController };
