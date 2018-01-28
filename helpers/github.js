const request = require('request');

let getReposByUsername = (username, callback) => {
  
  let options = {
    url: "https://api.github.com/users/" + username + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${process.env.TOKEN}`
    }
  };

  request(options, function (error, response, body) {
    if (error) {
      callback(error, null)
      return;
    } else {
      var parsed = JSON.parse(body);
      callback(null, parsed);
    }
});

}

module.exports.getReposByUsername = getReposByUsername;