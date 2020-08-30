const sqlite3 = require('sqlite3').verbose();
const utf8 = require('utf8');
// open the database
const db = new sqlite3.Database('./db_folder/db_1.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the GASS database.');
});

// async function asyncSqliteQuery(){}
// const asyncSqliteQuery2 =async ()=>{}

const asyncSqliteQuery =async (query)=> {
    try {
        // const query = "SELECT xy FROM gas";
        // const query_table_names = "select name from sqlite_master where type='table'";
        let query_result = null
        await db.all(query, [], (err, rows) => {

            if (err) {
                return console.error(err.message);
            }
            console.log("rows", rows)
            query_result=rows;
            // res.render("xy",{model: rows});
        });

        return query_result;

    } catch (error) {
        console.log("asyncSqliteQuery -> error", error)

    }
}

// const query = 'SELECT xy FROM gas';
// const query = 'SELECT xy FROM gas';
// const result = asyncSqliteQuery(query);
// console.log("asyncSqliteQuery -> result", result);
//data[{},{},{},{}]
//url, request,  method - get, response- data[{},{},{},{}]
module.exports = {asyncSqliteQuery};
// db.close((err) => {
//     if (err) {
//         console.error(err.message);
//     }
//     console.log('Close the database connection.');
// });