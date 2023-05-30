const express = require('express');

const passport = require('../Config/passport-local-strategy');

const Router = express.Router();
const Controller = require('../Controllers/router_c');
const ControllerA = require('../Controllers/admin_f');
// const Auth = require('../Config/auth');

Router.get('/', Controller.home);

Router.get('/gallery', Controller.gallery);

Router.get('/courses', Controller.courses);

Router.get('/faculty', Controller.faculty);

Router.get('/study-material', Controller.study_material);

Router.use('/admin', passport.checkAuthentication, require('./admin'));

Router.get('/adminLogin', passport.checkAuthentication2, Controller.adminLogin);

Router.post('/adminLoginPost' , passport.authenticate(
    'local',
    {
        failureRedirect : '/'
    }
), ControllerA.adminLoginPost);

Router.get('/google-auth', passport.authenticate('google', {scope: ['profile', 'email', 'phone']}));
Router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}), ControllerA.adminLoginPost);

Router.get('/log-out', Controller.sign_out);

module.exports = Router;