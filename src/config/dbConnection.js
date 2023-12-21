const Sequelize = require("sequelize");

const sequelize = new Sequelize("admin_customer_portal", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
