var csv = require('fast-csv');

module.exports = function() {
  var users = {};

  csv.fromPath('db/users.csv', {headers: true, delimiter: ','})
    .transform(function(obj){
      return {
        userId: obj.userId,
        enga: obj.engagement
      };
    })
    .on("data", function(data) {
      console.log(data);
      users[data.userId] = data;
      delete data['userId'];
    })
    .on("end", function() {
      console.log("done");
    });

  return users;
}
