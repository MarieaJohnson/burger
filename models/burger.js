// import orm.js into burger.js
// create the code that will call the ORM functions using burger specific input for the ORM
// export at the end of the burger.js

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  update: function(id, cb){
    orm.update("burgers", id, cb);
  },

  create: function(name,cb){
    orm.create("burgers", name, cb);
  }
}
  // The variables cols and vals are arrays.
//   create: function (cols, vals, cb) {
//     orm.create("burgers", cols, vals, function (res) {
//       cb(res);
//     });
//   },
//   update: function (objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function (res) {
//       cb(res);
//     });
//   },
//   delete: function (condition, cb) {
//     orm.delete("burgers", condition, function (res) {
//       cb(res);
//     });
//   }
// };

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;