module.exports = {
  db: {
    production: process.env.DB_URL,
    development: 'mongodb://localhost:27017/thumbtack',
    // development: 'mongodb://192.168.99.100:27017/thumbtack',
    test: 'mongodb://localhost:27017/thumbtack-test',
  },
  secret: process.env.SECRET_KEY || 'secret',
};
