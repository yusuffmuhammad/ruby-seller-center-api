require("dotenv").config();

module.exports = {
  appPort: process.env.APP_PORT || 3000,
  dbConfig: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
};
