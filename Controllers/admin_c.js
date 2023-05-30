const db = require('../Config/mysql');

module.exports.home = (req,res) => {

    const que1 = "SELECT * FROM categorie;";
    const que2 = "SELECT * FROM state;";
    const que3 = "SELECT * FROM director;";

    db.query(que1 + que2 + que3, (err,val) => {
        if(err){
            console.log("Error",err);
        }else{
            return res.render('admin',{
                'categorie': val[0],
                'state':val[1],
                'director':val[2][0]
            });
        }
    });

}

module.exports.admin_courses = (req,res) => {

    const que1 = "SELECT * FROM course;";
    const que2 = "SELECT * FROM tag;";

    db.query(que1 + que2, (err,val) => {
        if(err){
            console.log("Error",err);
        }else{

            return res.render('admin_courses',{
                'course': val[0],
                'tag':val[1]
            });

        }
    });

}

module.exports.admin_faculty = (req,res) => {

    const que1 = "SELECT * FROM faculty;";

    db.query(que1 , (err,val) => {
        if(err){
            console.log("Error",err);
        }else{
            return res.render('admin_faculty',{
                'faculty': val
            });
            
        }
    });

}

module.exports.admin_gallery = (req,res) => {

    const que1 = "SELECT * FROM gallery;";
    const que2 = "SELECT * FROM youtube;";

    db.query(que1 + que2, (err,val) => {
        if(err){
            console.log("Error",err);
        }else{

            return res.render('admin_gallery',{
                'gallery': val[0],
                'youtube':val[1]
            });

        }
    });

}

module.exports.admin_testomonial = (req,res) => {

    const que1 = "SELECT * FROM testomonial;";

    db.query(que1 , (err,val) => {
        if(err){
            console.log("Error",err);
        }else{
            return res.render('admin_testomonial',{
                'testomonial': val
            });
            
        }
    });

}

module.exports.admin_study_material = (req,res) => {

    const que1 = "SELECT * FROM material;";

    db.query(que1 , (err,val) => {
        if(err){
            console.log("Error",err);
        }else{
            return res.render('admin_study_material',{
                'material': val
            });
            
        }
    });

}

module.exports.admin_control = (req,res) => {

    const que1 = "SELECT * FROM users;";
    const que2 = "SELECT * FROM social;";

    db.query(que1 + que2 , (err,val) => {
        if(err){
            console.log("Error",err);
        }else{
            return res.render('admin_control',{
                'users': val[0],
                "social": val[1]
            });
        }
    });

}

