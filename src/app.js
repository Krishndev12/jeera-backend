require("dotenv").config();
const express = require("express");
const { dbConnection } = require("./Config/db");
// const { addOwner } = require("./Utils/AddOwner");

const app = express();
const PORT = process.env.PORT || 8080;

async function serverStart() {
  await dbConnection(process.env.DB_URL);

  //   addOwner("vishu", "vishu@gmail.com", "meraname@vishu");

  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });
  try {
  } catch (error) {
    res.json({
      err: error.message,
    });
  }
}

serverStart();
