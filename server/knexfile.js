require("dotenv").load();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'angular-reddit-clone',
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};