const express = require('express');
const gh = require('../helpers/github');
const bodyParser = require('body-parser');
const db = require('../database/index');
const cors = require('cors');
let app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use(cors);


app.options('/repos', cors());

app.post('/repos', function (req, res) {

  var username = req.body.username;
  
  var repos = gh.getReposByUsername(username, function(error, repos) {  
  	if (error) {
  		console.log(error);
  		res.send({error: error, message: "username does not exist or user has no repos"})
  	} 

  	if (repos.length > 0) {
  		console.log(repos);
  		db.save(repos, () => {
  		    res.send({message: 'successfully added repos from ' + username});
  	    }); 
  	} else {
  		res.send("User has no repos");
  	}	
  });
});

app.get('/repos', function (req, res) {
  
  db.getTop25((repos) => res.send(repos));

});

app.get('*', (req, res) =>{
  res.sendFile(path.resolve(__dirname, './/client/dist/index.html'));
});

let port = process.env.PORT || 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

