const express = require('express');

const Router = express.Router();
const Controller = require('../Controllers/admin_c');
const AdminFunctions  = require('../Controllers/admin_f')
const multer = require('multer');
const path = require('path');
const fs = require('fs');

//multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
const upload = multer({storage: storage});


Router.get('/', Controller.home);

Router.get('/admin-courses', Controller.admin_courses);

Router.get('/admin-faculty', Controller.admin_faculty);

Router.get('/admin-gallery', Controller.admin_gallery);

Router.get('/admin-testomonial', Controller.admin_testomonial);

Router.get('/admin-study-material', Controller.admin_study_material);

Router.get('/admin-control', Controller.admin_control);

Router.post('/update-categorie', AdminFunctions.update_categorie);

Router.post('/update-state', AdminFunctions.update_state);

Router.post('/update-director', upload.single('d_photo'), AdminFunctions.update_director);

Router.post('/update-course',AdminFunctions.update_course);

Router.post('/add-course', upload.single('co_photo'), AdminFunctions.add_course);

Router.get('/delete-course', AdminFunctions.delete_course);

Router.post('/add-faculty', upload.single('f_photo'), AdminFunctions.add_faculty);

Router.post('/update-faculty', AdminFunctions.update_faculty);

Router.get('/delete-faculty', AdminFunctions.delete_faculty);

Router.post('/add-gallery',upload.single('g_image'), AdminFunctions.add_gallery);

Router.get('/delete-gallery', AdminFunctions.delete_gallery);

Router.post('/add-youtube', AdminFunctions.add_youtube);

Router.get('/delete-youtube', AdminFunctions.delete_youtube);

Router.post('/add-testomonial', upload.single('te_photo'), AdminFunctions.add_testomonial);

Router.get('/delete-testomonial', AdminFunctions.delete_testomonial);

Router.post('/add-material', upload.single('sm_pdf'), AdminFunctions.add_material);

Router.get('/delete-material', AdminFunctions.delete_material);

Router.post('/update-tag', AdminFunctions.update_tag);

Router.get('/delete-tag', AdminFunctions.delete_tag);

Router.post('/add-user', AdminFunctions.add_user);

Router.get('/delete-user', AdminFunctions.delete_user);

Router.post('/update-social', AdminFunctions.update_social);

module.exports = Router;

