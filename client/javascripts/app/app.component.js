(function() {
  'use strict'

  angular.module('app')
    .component('app', {
      templateUrl: '/javascripts/app/app.template.html',
      controller: controller
    })

  controller.$inject = ['$http']
  function controller($http) {
    const vm = this

    vm.$onInit = onInit
    vm.upVote = upVote
    vm.downVote = downVote
    vm.addComment = addComment
    vm.addPost = addPost
    vm.toggleNewPostForm = toggleNewPostForm

    function onInit() {
      $http.get('/api/posts')
        .then((posts) => {
          vm.posts = posts.data
      })
    }

    function toggleNewPostForm() {
      vm.showNewPostForm = !vm.showNewPostForm;
    }

    function upVote(post) {
      post.vote_count++;
    }

    function downVote(post) {
      if (post.vote_count > 0) {
        post.vote_count--;
      }
    }

    function addComment(post, form) {
      if (post.newComment) {
        post.comments.push(post.newComment);
        delete post.newComment;
        form.$setPristine();
      }
    }

    function addPost(post) {
      vm.newPost.vote_count = 0
      vm.newPost.created_at = new Date
      vm.newPost.comments = []
      vm.posts.push(vm.newPost)
      toggleNewPostForm()
      delete vm.newPost
    }

  }

}());
