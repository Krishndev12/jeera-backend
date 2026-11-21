const bcrypt = require("bcrypt");
const { User } = require("../Models/User.schema");

const addOwner = (name, email, password) => {
  // ye admin banane ka code hai.Admin ko compass se nahi banaye kyuki hame hashed password chahiye.(ekk baar admin bana ke ye code ho hata dege, kyuki admin ban gaya)
  bcrypt.hash("maisabkabhagwan", 10).then((data) => {
    User.create({
      name,
      email,
      password: data,
      role: "owner",
    });
  });
};

module.exports = { addOwner };
