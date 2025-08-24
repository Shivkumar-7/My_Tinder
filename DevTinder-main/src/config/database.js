const mongoose = require("mongoose");
const data = require("../conf/conf");
 
const connectDB = async () => {
    await mongoose.connect(
        data.dataBaseUrl
    )
}

module.exports = connectDB;

// user - kumar00shiv00k123
// pass - 7T5hJKXUWBCFphEr