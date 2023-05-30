const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../Config/mysql');

//-----------------------------------------------------------Local
passport.use(new LocalStrategy({
        usernameField : 'email',
        passwordField: 'password',
        passReqToCallback : true
    },
    (req,email,password,done) => {
        const query = `SELECT * FROM users WHERE userEmail="${email}"`;
    
        db.query(query,(err,val) => {
            let user = val[0];
            if(err){
                console.log("Error",err);
                return done(err);
            }else{
                if(!user || user.userPassword != password){
                    return done(null,false);
                }else{
                    done(null,{
                        userEmail : user.userEmail,
                        userPassword: user.userPassword
                    });
                }
            }  
        })
    }
));

passport.serializeUser((user,done) => {
    done(null, user.userEmail);
})

passport.deserializeUser((id,done)=>{
    const query = `SELECT * FROM users WHERE userEmail="${id}"`;
    db.query(query,(err,val) => {
        let user = val[0];
        if(err){
            console.log("Error connecting to server");
        }else{
            return done(null , user);
        }  
    })

})

passport.checkAuthentication = (req,res,next) => {
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/adminLogin');
}

passport.setAuthenticateUser = (req,res,next) => {
    if(req.isAuthenticated()){
        res.locals.user = req.user
    }
    next();
}

passport.checkAuthentication2 = (req,res,next) => {
    if(!req.isAuthenticated()){
        return next();  
    }
    return res.redirect('/admin');
}

module.exports = passport;

//--------------------------------------------------------------Local