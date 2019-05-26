var mongoose = require('mongoose');

//connecting to db
var dbURI = 'mongodb://localhost/MongoosePM';

//create the db connection
mongoose.connect(dbURI);


//creating schema
//default: Date.now is default data
var userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    createOn: {Date, 'default': Date.now},
    modifiedOn: Date,
    lastLogin: Date
});
//create user model
mongoose.model('User', userSchema);

//project schema
var projectSchema = new mongoose.Schema({
    projectName: String,
    createOn: {Date, 'default': Date.now},
    modifedOn: Date,
    createBy: String,
    contributors: String,
    tasks: String
});

mongoose.model('Project', projectSchema);


//event handlers
mongoose.connection.on('connected', function(){
    console.log('mongoose connected to' + dbURI);
});

mongoose.connection.on('error', function(){
    console.log('mongoose connection error' + err);
});

mongoose.connection.on('disconnected', function(){
    console.log('mongoose disconnected');
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
	console.log('mongoose disconnected through app terminataion');
	process.exit(0);
    });
});

