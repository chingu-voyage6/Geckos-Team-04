const _ = require('lodash');
const User = require('../models/User');
const errorHandler = require('./error.controller');

const create = (req, res, next) => {
  const sanitizeName = name => name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  const sanitizeEmail = email => email.toLowerCase();

  const newUser = new User({
    name: {
      first: sanitizeName(req.body.name.first),
      last: sanitizeName(req.body.name.last),
    },
    email: sanitizeEmail(req.body.email),
    password: req.body.password,
  });

  newUser
    .save()
    .then(() => {
      res.status(200).json({
        message: `Successfully added!`,
      });
    })
    .catch(err =>
      res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      })
    );
};

const list = (req, res) => {
  User.find((err, users) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    res.json(users);
  }).select('name email updated created');
};

const userByID = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found',
      });
    }
    req.profile = user;
    next();
  });
};

const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  res.status(200).json({
    message: req.profile,
  });
};

const update = (req, res, next) => {
  let user = req.profile;
  user = _.extend(user, req.body);
  user.updated = Date.now();
  user.save(err => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  });
};

const remove = (req, res, next) => {
  const user = req.profile;
  user.remove((err, deletedUser) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(deletedUser);
  });
};

module.exports = {
  create,
  list,
  userByID,
  read,
  update,
  remove,
};
