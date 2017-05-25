(function() {
  'use strict'

  angular.module('app')
    .component('app', {
      template: `
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <a class="navbar-brand">AngularJS Reddit Clone</a>
          </div>
        </div>
      </nav>
      `,
      controller: controller
    })

  controller.$inject = []
  function controller() {
    const vm = this

    vm.$onInit = onInit

    function onInit() {

    }
  }

}());
