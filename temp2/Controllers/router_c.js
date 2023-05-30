const db = require('../Config/mysql');

module.exports.home = (req,res) => {

    return res.render('home');

}

module.exports.gallery = (req,res) => {

    return res.render('gallery');

}

module.exports.courses = (req,res) => {

    return res.render('courses');

}

module.exports.faculty = (req,res) => {

    return res.render('faculty');

}

module.exports.study_material = (req,res) => {

    return res.render('study_material');

}