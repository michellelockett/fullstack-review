const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  
  let options = {
    url: "https://api.github.com/users/" + username + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, function (error, response, body) {
    if (error) {
      callback(err)
    } else {
      var parsed = JSON.parse(body);
      callback(parsed);
    }
});

}

module.exports.getReposByUsername = getReposByUsername;