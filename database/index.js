const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('you are connected!')
});

let repoSchema = mongoose.Schema({
   repoID: { type: Number, unique: true, required: true },
   name: String,
   forks: Number,
   repoURL: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos, callback) => {
	repos.forEach(repo => {
		var current = new Repo({ repoID: repo.id , name: repo.name, forks: repo.forks, repoURL: repo.html_url });
		current.save((err, currentRepo) => {
			if (err) {
				console.log(err)
			} else {
				console.log('saved repo: ' + repo.name);
			}
		});
	}); 

	callback();
}

let getTop25 = (callback) => {
  Repo.find()
      .sort( {forks: -1} )
      .limit(25)
      .exec((err, repos) => {
      	if (err) {
      		console.log(err)
      	} else {
      		callback(repos);
      	}
      });
}

module.exports.getTop25 = getTop25
module.exports.save = save;