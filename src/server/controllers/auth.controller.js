const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const User = require('../models/User');
const config = require('../config');

const singin = (req, res) => {
  // set now + 1h
  const now = new Date();
  now.setTime(now.getTime() + 1 * 3600 * 1000);

  User.findOne(
    {
      email: req.body.email,
    },
    (err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: 'User not found',
        });
      }

      if (!user.authenticate(req.body.password)) {
        res.status(400).json({
          error: "Email and password don't match",
        });
      }

      const token = jwt.sign(
        {
          _id: user._id,
        },
        config.secret
      );

      res.cookie('t', token, {
        expire: now.toUTCString(),
      });

      return res.json({
        token,
        user: { _id: user._id, name: user.name, email: user.email },
        message: 'Success',
      });
    }
  );
};

const singout = (req, res) => {
  res.clearCookie('t');
  res.clearCookie('uid');
  return res.status('200').json({ message: 'Signed out' });
};

const requireSignin = expressJwt({
  secret: config.secret,
  requestProperty: 'auth',
});

const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!authorized) {
    return res.status(403).json({
      error: 'User is not authorized',
    });
  }
  next();
};

module.exports = {
  singin,
  singout,
  requireSignin,
  hasAuthorization,
};
