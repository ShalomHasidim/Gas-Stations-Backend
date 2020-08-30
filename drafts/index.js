// import npm
const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database('./db_folder/db_1.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});


const query = "SELECT xy FROM gas";
const query_table_names = "select name from sqlite_master where type='table'";
db.all(query, [], (err, rows) => {

  if (err) {
    return console.error(err.message);
  }
  console.log("rows", rows)
  // res.render("xy",{model: rows});
});




///////////////////////////////////////////////
// close the database connection




