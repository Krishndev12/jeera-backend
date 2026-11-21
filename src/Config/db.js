const mongoose = require("mongoose");

async function dbConnection(url) {
  try {
    await mongoose.connect(url);
    console.log("db connected successfully");
  } catch (error) {
    res.json({
      err: console.log("db connection failed", error.message),
    });
  }
}

module.exports = {
  dbConnection,
};
