const db = require('../Config/mysql');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

module.exports.adminLoginPost = (req,res) => {
    return res.redirect('/admin');
}

module.exports.update_categorie = (req,res) => {

    const c_name = req.body.c_name;
    const c_tag = req.body.c_tag;
    const c_value = req.body.c_info;
    const id = req.body.id;

    const que = `UPDATE categorie SET c_name = "${c_name}", c_tag = "${c_tag}" , c_value = "${c_value}" WHERE id = ${id};`;

    db.query(que, (err,val) => {
        if(err){
            console.log("Error",err);
        }
    })

    return res.redirect('back');

}

module.exports.update_state = (req,res) => {

    const s_name = req.body.s_name;
    const s_value = req.body.s_value;
    const id = req.body.id;


    const que = `UPDATE state SET s_name = "${s_name}", s_value = "${s_value}" WHERE id = ${id};`;

    db.query(que, (err,val) => {
        if(err){
            console.log("Error",err);
        }
    })

    return res.redirect('back');

}

module.exports.update_director = (req,res) => {

    if(!req.file){
        const d_info = req.body.d_info;

        const que = `UPDATE director SET d_info = "${d_info}" WHERE id = 1;`;
    
        db.query(que, (err,val) => {
            if(err){
                console.log("Error",err);
            }
        })
    }else{

        db.query(`SELECT * FROM director WHERE id = 1`, (err, val) => {
            if(err) throw err;
            if(val[0].d_photo){
                if (fs.existsSync(__dirname +"/."+ val[0].d_photo)) {
                    fs.unlinkSync(path.join(__dirname +"/."+ val[0].d_photo))
                }
            }
        })

        const d_photo = "./uploads/images/" + req.file.filename;
        const d_info = req.body.d_info;
    
        const que = `UPDATE director SET d_photo = "${d_photo}", d_info = "${d_info}" WHERE id = 1;`;
    
        db.query(que, (err,val) => {
            if(err){
                console.log("Error",err);
            }
        })
    }
    return res.redirect('back');
}

module.exports.update_course = (req,res) => {

    const co_tag = req.body.co_tag;
    const co_title = req.body.co_title;
    const co_duration = req.body.co_duration;
    const co_rating = req.body.co_rating;
    const co_price = req.body.co_price;
    const id = req.body.id;


    const que = `UPDATE course SET co_tag = "${co_tag}", co_title = "${co_title}" , co_duration = "${co_duration}" , co_rating = "${co_rating}" , co_price = "${co_price}"  WHERE id = ${id};`;

    db.query(que, (err,val) => {
        if(err){
            console.log("Error",err);
        }
    })

    return res.redirect('back');
}

module.exports.add_course = (req,res) => {

    if(!req.file){
        res.redirect('back');
    }

    const co_photo = "./uploads/images/" + req.file.filename;
    const co_tag = req.body.co_tag;
    const co_title = req.body.co_title;
    const co_duration = req.body.co_duration;
    const co_rating = req.body.co_rating;
    const co_price = req.body.co_price;

    const que = `INSERT INTO course (co_photo,co_tag,co_title,co_duration,co_rating,co_price) VALUES ("${co_photo}","${co_tag}","${co_title}",${co_duration},${co_rating},${co_price});`;

    db.query(que, (err,val) => {
        if(err){
            console.log("Error",err);
        }

        const cid = val.insertId;

        const que1 = `INSERT INTO tag (t_name,co_id) VALUES ("Weekly 1hr Lectures",${cid});`;
        const que2 = `INSERT INTO tag (t_name,co_id) VALUES ("Mock Test",${cid});`;
        const que3 = `INSERT INTO tag (t_name,co_id) VALUES ("Best Teachers",${cid});`;

        db.query(que1 + que2 + que3, (err,val) => {
            if(err){
                console.log("Error",err);
            }
        })

    })

    return res.redirect('back');

}

module.exports.delete_course = (req,res) => {

    const id = req.query.id;

    db.query(`SELECT * FROM course WHERE id = ${id}`, (err, val ) => {
        if(err) throw err;
        if(val[0].co_photo){

            if (fs.existsSync(__dirname +"/."+ val[0].co_photo)) {
                fs.unlinkSync(path.join(__dirname +"/."+ val[0].co_photo))
            }

        }
    })

    const que = `DELETE FROM course WHERE id=${id}`;

    db.query(que,(err,val) => {
        if(err){
            console.log("Error",err);
        }
    })

    return res.redirect('back');
}

module.exports.add_faculty = (req,res) => {
    if(!req.file){
        res.redirect('back');
    }

    const f_photo = "./uploads/images/" + req.file.filename;
    const f_tag = req.body.f_tag;
    const f_name = req.body.f_name;
    let f_jd = req.body.f_jd;
    const f_info = req.body.f_info;
    let f_link = req.body.f_link;

    if(f_jd.length == 0){
        f_jd = "";
    }
    if(f_link.length == 0){
        f_link = "#";
    }

    const que = `INSERT INTO faculty (f_photo,f_tag,f_name,f_jd,f_info,f_link) VALUES ("${f_photo}","${f_tag}","${f_name}","${f_jd}","${f_info}","${f_link}");`;

    db.query(que, (err,val) => {
        if(err){
            console.log("Error",err);
        }
    })

    return res.redirect('back');
}

module.exports.update_faculty = (req,res) => {
    const id = req.body.id;
    const f_tag = req.body.f_tag;
    const f_name = req.body.f_name;
    let f_jd = req.body.f_jd;
    const f_info = req.body.f_info;
    let f_link = req.body.f_link;

    if(f_jd.length == 0){
        f_jd = "";
    }
    if(f_link.length == 0){
        f_link = "#";
    }

    const que = `UPDATE faculty SET f_tag = "${f_tag}", f_name = "${f_name}" , f_jd = "${f_jd}" , f_info = "${f_info}" , f_link = "${f_link}"  WHERE id = ${id};`;

    db.query(que, (err,val) => {
        if(err){
            console.log("Error",err);
        }
    })

    return res.redirect('back');

}

module.exports.delete_faculty = (req,res) => {
    const id = req.query.id;

    db.query(`SELECT * FROM faculty WHERE id = ${id}`, (err, val ) => {
        if(err) throw err;
        if(val[0].f_photo){

            if (fs.existsSync(__dirname +"/."+ val[0].f_photo)) {
                fs.unlinkSync(path.join(__dirname +"/."+ val[0].f_photo))
            }

        }
    })

    const que = `DELETE FROM faculty WHERE id=${id}`;

    db.query(que,(err,val) => {
        if(err){
            console.log("Error",err);
        }
    })

    return res.redirect('back');
}

module.exports.add_gallery = (req,res) => {
    if(!req.file){
        res.redirect('back');
    }

    const g_image = "./uploads/images/" + req.file.filename;

    const que = `INSERT INTO gallery (g_image) VALUES ("${g_image}");`;

    db.query(que, (err,val) => {
        if(err){
            console.log("Error",err);
        }
    })

    return res.redirect('back');
}

module.exports.delete_gallery = (req,res) => {
    const id = req.query.id;

    db.query(`SELECT * FROM gallery WHERE id = ${id}`, (err, val ) => {
        if(err) throw err;
        if(val[0].g_image){

            if (fs.existsSync(__dirname +"/."+ val[0].g_image)) {
                fs.unlinkSync(path.join(__dirname +"/."+ val[0].g_image))
            }

        }
    })

    const que = `DELETE FROM gallery WHERE id=${id}`;

    db.query(que,(err,val) => {
        if(err){
            console.log("Error",err);
        }
    })

    return res.redirect('back');
}

module.exports.add_youtube = (req,res) => {

    const link = req.body.y_link;

    let ref = "";
    let newLink = "";

    // db.query(`SELECT * FROM students WHERE id = ${id}`, (err, val ) => {
    //     if(err) throw err;
    //     if(val[0].avatar){
    //         fs.unlinkSync(path.join(__dirname + '/upload/' + val[0].avatar))
    //     }
    // })

    for(let i=0;i< link.length;i++){
        if(i != link.length-2 && link[i] == "v" && link[i+1] =="="){
            ref = link.substring(i+2);
        }
    }

    for(let i=0;i< link.length;i++){
        if(ref[i] == "&"){
            newLink = ref.substring(0,i);
        }
    }
    if(newLink.length == 0){
        newLink = ref;
    }

    const que = `INSERT INTO youtube (y_link) VALUES ("${newLink}");`;

    db.query(que, (err,val) => {
        if(err){
            console.log("Error",err);
        }
    })

    return res.redirect('back');
}

module.exports.delete_youtube = (req,res) => {
    const id = req.query.id;

    const que = `DELETE FROM youtube WHERE id=${id}`;

    db.query(que,(err,val) => {
        if(err){
            console.log("Error",err);
        }
    })

    return res.redirect('back');
}

module.exports.add_testomonial = (req,res) => {
    if(!req.file){
        res.redirect('back');
    }

    const te_photo = "./uploads/images/" + req.file.filename;
    const te_tag = req.body.te_tag;
    const te_name = req.body.te_name;
    const te_review = req.body.te_review;
    const te_value = req.body.te_value;

    const que = `INSERT INTO testomonial (te_photo,te_tag,te_name,te_review,te_value) VALUES ("${te_photo}","${te_tag}","${te_name}",${te_review},"${te_value}");`;

    db.query(que, (err,val) => {
        if(err){
            console.log("Error",err);
        }
    })

    return res.redirect('back');
}

module.exports.delete_testomonial = (req,res) => {
    const id = req.query.id;

    db.query(`SELECT * FROM testomonial WHERE id = ${id}`, (err, val ) => {
        if(err) throw err;
        if(val[0].te_photo){

            if (fs.existsSync(__dirname +"/."+ val[0].te_photo)) {
                fs.unlinkSync(path.join(__dirname +"/."+ val[0].te_photo))
            }

        }
    })

    const que = `DELETE FROM testomonial WHERE id=${id}`;

    db.query(que,(err,val) => {
        if(err){
            console.log("Error",err);
        }
    })

    return res.redirect('back');
}

module.exports.add_material = (req,res) => {
    if(!req.file){
        res.redirect('back');
    }

    const sm_pdf = "./uploads/images/" + req.file.filename;
    const sm_tag = req.body.sm_tag;
    const sm_name = req.body.sm_name;
    const sm_value = req.body.sm_value;

    const que = `INSERT INTO material (sm_pdf,sm_tag,sm_name,sm_value) VALUES ("${sm_pdf}","${sm_tag}","${sm_name}","${sm_value}");`;

    db.query(que, (err,val) => {
        if(err){
            console.log("Error",err);
        }
    })

    return res.redirect('back');
}

module.exports.delete_material = (req,res) => {
    const id = req.query.id;

    db.query(`SELECT * FROM material WHERE id = ${id}`, (err, val ) => {
        if(err) throw err;
        if(val[0].sm_pdf){

            if (fs.existsSync(__dirname +"/."+ val[0].sm_pdf)) {
                fs.unlinkSync(path.join(__dirname +"/."+ val[0].sm_pdf))
            }

        }
    })

    const que = `DELETE FROM material WHERE id=${id}`;

    db.query(que,(err,val) => {
        if(err){
            console.log("Error",err);
        }
    })

    return res.redirect('back');
}

module.exports.update_tag = (req,res) => {

    const t_name = req.body.t_name;
    const id = req.body.id;


    const que = `UPDATE tag SET t_name = "${t_name}" WHERE id = ${id};`;

    db.query(que, (err,val) => {
        if(err){
            console.log("Error",err);
        }
    })

    return res.redirect('back');
}

module.exports.delete_tag = (req,res) => {
    const id = req.query.id;

    const que = `DELETE FROM tag WHERE id=${id}`;

    db.query(que,(err,val) => {
        if(err){
            console.log("Error",err);
        }
    })

    return res.redirect('back');
}

module.exports.add_user = (req,res) => {

    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;

    const que = `INSERT INTO users (userEmail,userPassword) VALUES ("${userEmail}","${userPassword}");`;

    db.query(que, (err,val) => {
        if(err){
            console.log("Error",err);
        }
    })

    return res.redirect('back');
}

module.exports.delete_user = (req,res) => {
    const id = req.query.id;

    if(id == 1){
        return res.redirect('back');
    }

    const que = `DELETE FROM users WHERE id=${id}`;

    db.query(que,(err,val) => {
        if(err){
            console.log("Error",err);
        }
    })

    return res.redirect('back');
}

module.exports.update_social = (req,res) => {
    const social_value = req.body.social_value;
    const id = req.body.id;


    const que = `UPDATE social SET social_value = "${social_value}" WHERE id = ${id};`;

    db.query(que, (err,val) => {
        if(err){
            console.log("Error",err);
        }
    })

    return res.redirect('back');
}