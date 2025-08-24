require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  dataBaseUrl: process.env.DATABASE_URL,
  jwtkey: process.env.JWTKEY,  // must be defined
  front: process.env.FRONTURL,
};
