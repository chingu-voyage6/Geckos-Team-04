const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const express = require('express');
const config = require('../config');
const User = require('../models/User');
const authController = require('../controllers/auth.controller');

const {
  oauth: { facebook, google },
} = config;

passport.use(
  new FacebookStrategy(
    {
      clientID: facebook.FACEBOOK_APP_ID,
      clientSecret: facebook.FACEBOOK_APP_SECRET,
      callbackURL: `${config.BASEURL}/auth/facebook/callback`,
    },
    (accessToken, refreshToken, profile, cb) => {
      User.findOrCreate({
        provider: 'facebook',
        providerId: profile.id,
        username: profile.emails[0],
        name: {
          first: profile.name.givenName,
          last: profile.name.familyName,
        },
        function(err, user) {
          cb(err, user);
        },
      });
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: google.GOOGLE_APP_ID,
      clientSecret: google.GOOGLE_APP_SECRET,
      callbackURL: `${config.BASEURL}/auth/google/callback`,
    },
    (accessToken, refreshToken, profile, cb) => {
      User.findOrCreate({
        provider: 'google',
        providerId: profile.id,
        username: profile.emails[0],
        name: {
          first: profile.name.givenName,
          last: profile.name.familyName,
        },
        function(err, user) {
          cb(err, user);
        },
      });
    }
  )
);

const router = express.Router();

const facebookRouter = express.Router();
const googleRouter = express.Router();

facebookRouter.route('/').get(passport.authenticate('facebook'));
facebookRouter
  .route('/callback')
  .get(passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
    res.redirect('/');
  });

googleRouter.route('/').get(passport.authenticate('google', { scope: ['profile'] }));
googleRouter
  .route('/callback')
  .get(passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
    res.redirect('/');
  });

router.use('facebook', facebookRouter);
router.use('google', facebookRouter);
router.route('/singin').post(authController.singin);
router.route('/signout').get(authController.singout);

module.exports = router;
