// create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectALL()
// insertOne()
// updateOne()

// Export the ORM object in Module.exports

var connection = require("./connection.js");

var orm = {
  all: function(tableInput, cb){
    connection.query('SELECT * FROM '+tableInput+';', function(err, res){
      if(err) throw err;
      cb(res)
    })
  },

  update: function(tablenput, condition, cd){
    connection.query("UPDATE " +tableInput+" SET devoured = true WHERE id = "+condition+";", function(err,res){
      if(err)throw err;
      cb(res);
    })
  },

  create: function(tableInput,val,cb){
    connection.query('INSERT INTO '+tableInput+" (burger_name) VALUES ("+val+");", function(err,res){
      if(err)throw err;
      cb(res);
    })
  }
}

// var orm = {
//   select: function (whatToSelect, tableInput) {
//     var queryString = "SELECT ?? FROM ??";
//     connection.query(queryString, [whatToSelect, tableInput], function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
  // },
//   selectWhere: function (tableInput, colToSearch, valOfCol) {
//     var queryString = "SELECT * FROM ?? WHERE ?? = ?";

//     console.log(queryString);

//     connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   },
//   leftJoin: function (whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
//     var queryString = "SELECT ?? FROM ?? AS tOne";
//     queryString += " LEFT JOIN ?? AS tTwo";
//     queryString += " ON tOne.?? = tTwo.??";

//     console.log(queryString);

//     connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function (
//       err,
//       result
//     ) {
//       if (err) throw err;
//       console.log(result);
//     });
//   }
// };

module.exports = orm;

