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


module.exports = Router;