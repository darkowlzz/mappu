class MainController {
  constructor($modal, map) {
    this.modal = $modal;

    // Initialize the map.
    map.init();
  }

  // Open the location gathering wizard (modals)
  getLocation() {
    let modalInstance = this.modal.open({
      animation: true,
      templateUrl: 'modalView.html',
      controller: 'LocationModalCtrl',
      size: 'lg'
    })
  }

}

MainController.$inject = ['$modal', 'map'];

export { MainController };
