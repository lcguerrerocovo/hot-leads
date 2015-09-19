var csv = require('fast-csv');

module.exports = function() {
  var users = {};

  csv.fromPath('db/leads-a-lot.csv', {headers: true, delimiter: ';'})
    .transform(function(obj){
      return {
        userId: obj.userId,
        timestamp: obj.timestamp,
        accountId: obj.accountId,
        propertyId: obj.propertyId,
        business: obj.business,
        salePrice: obj.salePrice,
        rentPrice: obj.rentPrice,
        lat: obj.lat,
        lon: obj.lon
      };
    })
    .on("data", function(data) {
      console.log(data);
      if(!(data.userId in users)){
        users[data.userId] = [];
      }
      users[data.userId].push(data);
      delete data['userId'];
    })
    .on("end", function() {
      console.log("done");
    });

  return users;
}
