const passport = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ profileId: profile.id });
        if (existingUser) {
          console.log("user already exists");
          return done(null, existingUser);
        }

        console.log("saving new user with profileId: ", profile.id);
        const user = await new User({ profileId: profile.id }).save();
        done(null, user);
      } catch (e) {
        console.log("Error authenticating: " + e);
      }
    }
  )
);
