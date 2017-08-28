const passport = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ profileId: profile.id }).then(existingUser => {
        if (existingUser) {
          console.log("user already exists");
        } else {
          console.log("saving profile with id: ", profile.id);
          new User({ profileId: profile.id }).save();
        }
      });
    }
  )
);
