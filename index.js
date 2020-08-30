const {asyncSqliteQuery} = require('./server/modules/sqlite');

const query = 'SELECT * FROM fulesop';
const result = asyncSqliteQuery(query);
console.log("asyncSqliteQuery -> result", result);