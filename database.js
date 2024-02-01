var mysql= require("mysql")

var connection= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'logicsedd'
});

connection.connect(function(err){
    if(err){console.error('error in connecting'+err.stack);}

    console.log('connected as id' +connection.threadId);
});

// import data

var viewStudent= 'SELECT * FROM student'
connection.query(viewStudent,function(error,results,fields){
if (error) throw error;
console.log (results)});

// insert data
var newStudent= {
firstname: 'Salina',
lastname: 'Baral',
username:'Saloni',
roll: 456
};
var insertQuery = 'INSERT INTO student SET ?';
connection.query(insertQuery, newStudent, function (error,results,fields) {
    if (error) throw error;
    console.log('New student insert with ID:', newStudent.roll);
});


