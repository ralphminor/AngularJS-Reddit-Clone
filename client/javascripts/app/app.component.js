(function() {
  'use strict'

  angular.module('app')
    .component('app', {
      templateUrl: '/javascripts/app/app.template.html',
      controller: controller
    })

  controller.$inject = []
  function controller() {
    const vm = this

    vm.$onInit = onInit

    function onInit() {
      vm.posts = [
        {title: "test1"},
        {title: "test2"},
        {title: "test3"}
      ]
    }
  }

}());
