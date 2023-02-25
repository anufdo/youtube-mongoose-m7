const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const User = require("./User");

// Connect to the database
mongoose.connect("mongodb://127.0.0.1/m7", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userData = [
  {
    firstName: "Saman",
    lastName: "Silva",
    age: 30,
    email: "samansliva@gmail.com",
    status: "active",
  },
  {
    firstName: "Nimal",
    lastName: "Fernando",
    age: 35,
    email: "nimalfernando@gmail.com",
    status: "active",
  },
  {
    firstName: "Kamal",
    lastName: "Silva",
    age: 40,
    email: "kamalsilva@gmail.com",
    status: "pending",
  },
];

// async function insertManyUsers() {
//   await User.insertMany(userData);
// }

// insertManyUsers().then(() => console.log("Inserted"));

// list all users
async function listAll() {
  const users = await User.find();
  console.log(users);
}

// listAll();
