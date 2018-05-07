// create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectALL()
// insertOne()
// updateOne()

// Export the ORM object in Module.exports

var connection = require("./connection.js");

var orm = {
  all: function (tableInput, cb) {
    connection.query("SELECT * FROM " + tableInput + ";", function (err, result) {
      if (err) throw err;
      cb(result)
    })
  },

  update: function (tableInput, condition, cb) {
    connection.query("UPDATE " + tableInput + " SET devoured = true WHERE id = " + condition + ";", function (err, result) {
      if (err) throw err;
      cb(result);
    })
  },

  create: function (tableInput, val, cb) {
    connection.query("INSERT INTO " + tableInput + " (burgerType) VALUES ('" + val + "');", function (err, result) {
      if (err) throw err;
      cb(result);
    })
  }
}

module.exports = orm;

