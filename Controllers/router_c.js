const db = require('../Config/mysql');

module.exports.home = (req,res) => {

    const que1 = "SELECT * FROM categorie;";
    const que2 = "SELECT * FROM state;";
    const que3 = "SELECT * FROM director;";
    const que4 = "SELECT * FROM course;";
    const que5 = "SELECT * FROM testomonial;";
    const que6 = "SELECT * FROM faculty;";
    const que7 = "SELECT * FROM social;";
    const que8 = "SELECT * FROM tag;";

    db.query(que1 + que2 + que3 + que4 + que5 + que6 + que7 + que8, (err,val) => {
        if(err){
            console.log("Error",err);
        }else{
            return res.render('home',{
                'categorie': val[0],
                'state':val[1],
                'director':val[2][0],
                'course': val[3].slice(-3),
                'testomonial': val[4],
                'faculty': val[5].slice(0, 3),
                'social': val[6],
                'tag': val[7]
            });
        }
    });

}

module.exports.gallery = (req,res) => {

    const que1 = "SELECT * FROM gallery;";
    const que2 = "SELECT * FROM social;";
    const que3 = "SELECT * FROM youtube;";


    db.query(que1 + que2 + que3, (err,val) => {
        if(err){
            console.log("Error",err);
        }else{
            return res.render('gallery',{
                'gallery': val[0],
                'social': val[1],
                'youtube': val[2]
            });
        }
    });

}

module.exports.courses = (req,res) => {

    const que1 = "SELECT * FROM course;";
    const que2 = "SELECT * FROM social;";
    const que3 = "SELECT * FROM tag;";


    db.query(que1 + que2 + que3, (err,val) => {
        if(err){
            console.log("Error",err);
        }else{
            return res.render('courses',{
                'course': val[0],
                'social': val[1],
                'tag': val[2]
            });
        }
    });

}

module.exports.faculty = (req,res) => {

    const que1 = "SELECT * FROM faculty;";
    const que2 = "SELECT * FROM social;";


    db.query(que1 + que2, (err,val) => {
        if(err){
            console.log("Error",err);
        }else{
            return res.render('faculty',{
                'faculty': val[0],
                'social': val[1]
            });
        }
    });

}

module.exports.study_material = (req,res) => {

    const que1 = "SELECT * FROM material;";
    const que2 = "SELECT * FROM social;";


    db.query(que1 + que2, (err,val) => {
        if(err){
            console.log("Error",err);
        }else{
            return res.render('study_material',{
                'material': val[0],
                'social': val[1]
            });
        }
    });

}

module.exports.adminLogin = (req,res) => {

    return res.render('admin_login');

}

module.exports.sign_out = (req,res) => {

    req.logout(err=>{
        if(err){
            return res.redirect('back');
        }else{
            return res.redirect('/admin')
        }
    });

}
