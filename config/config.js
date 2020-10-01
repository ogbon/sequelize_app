require('dotenv').config();
const { DB_HOST, DB_NAME, DB_PASSWORD, DB_DATABASE } = process.env;

module.exports = {
  development: {
    username: DB_NAME,
    password:  DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    dialect: "mysql"
  },
  test: {
    username: "",
    password: null,
    database: "",
    host: "",
    dialect: "mysql"
  },
  production: {
    username: "",
    password: null,
    database: "",
    host: "",
    dialect: "mysql"
  }
}
