var express			=	require('express');
var app 			=	express();
var port 			=	process.env.PORT||8080;
var morgan 			=	require('morgan');
var mongoose 		=	require('mongoose');
var bodyParser 		=	require("body-parser");
var router 			= 	express.Router();
var path 			=	require('path');
var appRoutes 		=	require('./apis/app.js');
var mysql = require('mysql');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname+'/public'));
app.use('/up',appRoutes);







app.listen(port,function(){
	console.log("server running on port "+port);
});