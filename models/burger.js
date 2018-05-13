// // Import the ORM to create functions that will interact with the database
// var orm = require("../config/orm.js");

// var burgers = {
//     all: function (cb) {
//         orm.selectAll("burgers", function(res) {
//             cb(res);
//         });
//     },
//     // The variables cols and vals are arrays
//     create: function (cols, vals, cb) {
//         orm.createOne("burgers", cols, vals, function(res) {
//             cb(res);
//         });
//     },
//     update: function (objColVals, condition, cb) {
//         orm.updateOne("burgers", objColVals, condition, function(res) {
//             cb(res);
//         });
//     },
//     delete: function(cols, condition, cb){
//         orm.deleteOne("burgers", condition, function(res){
//             cb(res);
//         });
//     }
// };
// module.exports = burgers;

// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var burgers = sequelize.define("burger", {
  // the name of the burger (a string)
  name: Sequelize.STRING,
  // the burger's condition(a string)
devoured: Sequelize.STRING
}, {
  timestamps: false
});

// Syncs with DB
burgers.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = burgers;