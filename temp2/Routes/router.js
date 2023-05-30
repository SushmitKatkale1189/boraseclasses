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

module.exports = Router;