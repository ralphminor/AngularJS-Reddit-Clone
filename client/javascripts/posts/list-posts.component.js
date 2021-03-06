(function() {
  'use strict'

  angular.module('app')
    .component('listPosts', {
      require: {
        layout: '^app'
      },
      templateUrl: '/javascripts/posts/list-posts.template.html',
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
      $http.post(`/api/posts/${post.id}/votes`)
        .then(response => {
          post.vote_count = response.data.vote_count
        })
    }

    function downVote(post) {
      if (post.vote_count > 0) {
        $http.delete(`/api/posts/${post.id}/votes`)
        .then(response => {
          post.vote_count = response.data.vote_count
        })
      }
    }

    function addComment(post, form) {
      if (post.newComment) {
        $http.post(`/api/posts/${post.id}/comments`, post.newComment )
          .then(response => {
            post.comments.push(response.data);
            delete post.newComment;
            form.$setPristine();
        })
      }
    }

    function addPost() {
      $http.post('/api/posts', vm.newPost)
        .then(response => {
          response.data.comments = [];
          vm.posts.push(response.data);
          vm.toggleNewPostForm()
          delete vm.newPost
        })
    }

  }

}());
