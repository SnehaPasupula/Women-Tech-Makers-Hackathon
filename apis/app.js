var express = require('express');
var router = express.Router()
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database : "mysql",
  password: ""
});
con.connect(function(err) {
   if (err) throw err;
   console.log("Connected to SQL!");
});
router.post('/submitDetails',function(req,res){
    var name = req.body.name;
    var mobile = req.body.mobile;
    var age = req.body.age;
    var occup= req.body.occupation;
    var oraganization=req.body.org;
    var location = req.body.location;
    var budget=req.body.budget;
    var distance =req.body.distance;
    con.query("SELECT place,budget,distance,contact FROM Hackathon where distance <= "+distance+" and budget <= "+budget, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    
    
    res.send("Hello BAby! details are received!");

});

module.exports = router;