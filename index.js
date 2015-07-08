var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var _ = require('underscore');

 
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());

var users = [
{id: 1,
username: 'jhars',
firstname: 'jon',
lastname: 'harlan',
age: 27
},
{id: 2,
username: 'tony',
firstname: 'antonio',
lastname: 'danza',
age: 33
}

];

app.get('/users', function (req, res){
	res.json(users);
});

app.post('/users',function (req, res){
	var newUser = req.body;
	users.push(newUser);
	res.json(newUser);
});

//-----------update user-------------------//
app.put('/users/:id', function (req, res){
	var targetID = parseInt(req.params.id);
	var foundUser = _.findWhere(users, {id: targetID});
	foundUser.firstname = req.body.firstname;
	foundUser.lastname = req.body.lastname;
	res.json(foundUser);
});


//---------show user based on ID in URL------//
app.get('/users/:id', function (req, res){
	var targetID = parseInt(req.params.id);
	var showUser = _.findWhere(users, {id: targetID});
	res.json(showUser);
});

//----------DELETE USER-----------------//
app.delete('/users/:id',function (req, res){
	var targetID = parseInt(req.params.id);
	var foundUser = _.findWhere(users, {id: targetID});
	var index = users.indexOf(foundUser);
	users.splice(index,1);
	res.json(foundUser.username + ' has been deleted');
});











var server = app.listen(3000);