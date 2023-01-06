const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    'db_consultant_sejen',
    'root',
    'root',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
   );

module.exports = {
    database: sequelize,
};