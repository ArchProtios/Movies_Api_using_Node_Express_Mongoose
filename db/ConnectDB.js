const mongoose = require("mongoose");

const ConnectDB = async (DATABASE_URL) => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Database Connected ...");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { ConnectDB };
