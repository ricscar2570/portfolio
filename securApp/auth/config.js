// Passport.js configuration

const passport = require("passport");
const OAuth2Strategy = require("passport-oauth2");

passport.use(new OAuth2Strategy({
    authorizationURL: process.env.AUTH_URL,
    tokenURL: process.env.TOKEN_URL,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}));

module.exports = passport;
