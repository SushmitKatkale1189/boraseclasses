const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const db = require('../Config/mysql');

passport.use(new GoogleStrategy({
    clientID: '784411793503-i72m5fgj3tt3gqo6acrgrvbgm45l8e17.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:8000/google/callback",
    },
    function(accessToken, refreshToken, profile, done){
        // find a user
        let email = profile.emails[0].value;
        const query = `SELECT * FROM users WHERE userEmail="${email}"`;
    
        db.query(query,(err,val) => {
            let user = val[0];
            if (user){
                return done(null, user);
            }else{
                return done(null,false);
            }
        })

    }
));

module.exports = passport;


// function(err, user){
//     if (err){
//         req.flash('error','Error in google strategy-passport');
//         return;
//     }
//     // console.log(accessToken, refreshToken);
//     // console.log(profile);

//     if (user){
//         return done(null, user);
//     }else{
//         // if not found, create the user and set it as req.user
//         User.create({
//             userEmail: profile.displayName,
//             userName: profile.emails[0].value,
//             userPhone: 1234567890,
//             userPassword: crypto.randomBytes(20).toString('hex')
//         }, function(err, user){
//             if (err){
//                 req.flash('error','Error in creating user google strategy-passport');
//                 return;
//             }
//             return done(null, user);
//         });
//     }

// }