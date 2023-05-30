const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : MYSQL_USER,
//     password : MYSQL_PASS,
//     database : MYSQL_DATABASE,
//     multipleStatements: true
// })

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Sushmit_Mysql@1189',
    database : 'template_1',
    multipleStatements: true
})

connection.connect((err)=>{
    err?console.log(`Error ${err}`):console.log(`Connected to mysql dataabse`);
});

module.exports = connection;