exports.seed = function(knex, Promise) {

  const text1 = [
    "Ford released the new generation of its legendary pony car over a year ago.",
    "After updating the standard versions, it is finally time that we can expect updates to their hi-performance models and especially the Shelby versions.",
    "While the updated GT350 is already on its way, the fastest Mustang is expected to come in the near future.",
    "The original Mustang came out in 1967, and it is expected that the latest will arrive in early 2017 as the Shelby GT500, celebrating it's 50th anniversary.",
  ].join("\n\n")

  const text2 = [
    "The Lamborghini Aventador Roadster is the most extraordinary car in the company’s illustrious history, or so said the firm's charismatic chairman, Stephan Winkelmann, at the car’s launch in Miami.",
    "Don’t be fooled by the extrovert styling or the price tag; the Aventador Roadster is an extremely well engineered supercar.",
    "Despite it being one of the more gruesome examples of how the chasm between the haves and the have-nots continues to widen, it’s also a wondrous machine in its own right.",
  ].join("\n\n")

  const text3 = [
    "Audi has completely redesigned the R8 coupe and R8 Spyder for the 2017 model year.",
    "Two flavors will be offered initially: R8 V10 and R8 V10 Plus. The mid-engine all-wheel-drive sports car rides on an all-new lightweight chassis and features multiple driving modes and MagneRide shocks.",
    "The 2017 Audi R8 is available with many of the automaker’s latest technologies.",
  ].join("\n\n")

  return knex('comments').del()
    .then(() => knex('posts').del())
    .then(function () {
      return Promise.all([
        createPost(
          '2017 Shelby GT500',
          text1,
          'The Cruiser',
          'https://static.pexels.com/photos/24353/pexels-photo.jpg',
          new Date(2016, 11, 17)
        ),
        createPost(
          '2017 Lamborghini Aventador Roadster',
          text2,
          'Steve Sutcliffe',
          'https://static.pexels.com/photos/39855/lamborghini-brno-racing-car-automobiles-39855.jpeg',
          new Date(2017, 03, 21)
        ),
        createPost(
          "2017 Audi R8",
          text3,
          'Speed Racer',
          'https://static.pexels.com/photos/163232/audi-r8-audi-sports-car-fast-163232.jpeg',
          new Date(2017, 4, 30)
        ),
      ])
    })
    .then(function (postIds) {
      return Promise.all([
        knex('comments').insert({post_id: postIds[0], content: 'Perfezionare!'}),
        knex('comments').insert({post_id: postIds[0], content: 'Bellisima!'}),
        knex('comments').insert({post_id: postIds[2], content: 'This comment thread is so lonely'}),
      ])
    })

  function createPost(title, body, author, image_url, created_at) {
    return knex('posts')
      .insert({title, body, author, image_url, created_at})
      .returning('id')
      .then(ids => ids[0])
  }
};