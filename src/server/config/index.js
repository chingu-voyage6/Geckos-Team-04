module.exports = {
  db: {
    production: process.env.DB_URL,
    development: 'mongodb://localhost:27017/thumbtack',
    // development: 'mongodb://192.168.99.100:27017/thumbtack',
    test: 'mongodb://localhost:27017/thumbtack-test',
  },
  secret: process.env.SECRET_KEY || 'secret',
  BASEURL: process.env.BASEURL || 'http://localhost:3000',
  oauth: {
    google: {
      GOOGLE_APP_ID: process.env.FACEBOOK_APP_ID,
      GOOGLE_APP_SECRET: process.env.FACEBOOK_APP_SECRET,
    },
    facebook: {
      FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
      FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET,
    },
  },
};
