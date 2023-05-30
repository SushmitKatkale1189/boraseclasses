const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const port = process.env.PORT || 8000;
const { urlencoded } = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./Config/mysql');
 
const app = express();

//-------------------------------------------
//middlewares
app.use(urlencoded());
app.use(cookieParser());

//passport
const passport = require('passport');
const passportLocal = require('./Config/passport-local-strategy');
const passportGoogle = require('./Config/passport-google-oauth');
const session = require('express-session');

//mongo store
const MysqlStore = require('express-mysql-session')(session);

//-------------------------------------------
//Front End Middlewares
app.use(express.static('Assests'));
app.use('/uploads', express.static(__dirname + '/uploads'))

app.set('view engine', 'ejs');
app.set('views', './Views');

app.use(expressEjsLayouts);
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);
//-------------------------------------------

//mysql session
// let mysqlSession = new MysqlStore({
//     host: "localhost",
//     user: MYSQL_USER,
//     database: MYSQL_DATABASE,
//     password : MYSQL_PASS
// });

let mysqlSession = new MysqlStore({
    host     : 'localhost',
    user     : 'root',
    password : 'Sushmit_Mysql@1189',
    database : 'temp_2',
});

//express-session
app.use(session({
    name: 'aaalearningcouch',
    // secret: PASSPORT_SECRET,
    secret: "something",
    saveUninitialized : false,
    resave : false,
    cookie: {
        maxAge: (1000*60*60*24)
    },
    store: mysqlSession
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticateUser);

//-------------------------------------------
//server
app.use('/', require('./Routes/router'));

app.listen(port, (err) => {
    err ? console.log(`Error connecting to server`):console.log(`Server is up on port ${port}`);
});
//-------------------------------------------