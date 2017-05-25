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
      vm.posts = vm.posts = [
        {
          title: "A poem from me",
          body: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
          author: 'Ironic Irma',
          image_url: 'https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?h=350&auto=compress',
          vote_count: 1,
          created_at: new Date(2004, 12, 17),
          comments: [
            {content: 'Firsties!'},
            {content: 'I did it for the lulz'},
          ],
        },
        {
          title: "Oh poem my poem",
          body: "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.",
          author: 'Emo Emma',
          image_url: 'https://images.pexels.com/photos/1994/red-vintage-shoes-sport.jpg?h=350&auto=compress',
          vote_count: 4,
          created_at: new Date(2011, 11, 11),
          comments: [
            {content: 'Great post!'},
          ],
        },
        {
          title: "It's all about me",
          body: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
          author: 'Hipster Henry',
          image_url: 'https://images.pexels.com/photos/4787/feet-hipster-longboard-skateboard.jpg?h=350&auto=compress',
          vote_count: 0,
          created_at: new Date(2002, 5, 12),
          comments: [ ],
        },
      ]
    }
  }

}());
