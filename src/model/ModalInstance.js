class ModalInstanceController {
  constructor($scope, $modalInstance) {
    this.scope = $scope;
    this.modalInstance = $modalInstance;

    this.scope.title = 'Location';
    this.scope.body = 'How would you like to mark your location on the map';
    this.scope.button1 = 'Use GPS';
    this.scope.button2 = 'Manual';

    let that = this;

    this.scope.btn1Click = function () {
      that.modalInstance.close();
    };

    this.scope.btn2Click = function () {
      that.modalInstance.dismiss();
    };
  }

}

ModalInstanceController.$inject = ['$scope', '$modalInstance'];

export { ModalInstanceController };
