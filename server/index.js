const express = require('express');
const gh = require('../helpers/github');
const bodyParser = require('body-parser');
const db = require('../database/index');
let app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {

  var username = req.body.username;

  var repos = gh.getReposByUsername(username, function(repos) {  
  	db.save(repos, () => {
  		res.send({message: 'successfully added repos from ' + username});
  	}); 	
  });
});

app.get('/repos', function (req, res) {
  
  db.getTop25((repos) => res.send(repos));

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

