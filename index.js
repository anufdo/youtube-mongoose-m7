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
    languages: ["c#", "java", "javascript"],
  },
  {
    firstName: "Nimal",
    lastName: "Fernando",
    age: 35,
    email: "nimalfernando@gmail.com",
    status: "active",
    languages: ["javascript", "typescript"],
  },
  {
    firstName: "Kamal",
    lastName: "Silva",
    age: 40,
    email: "kamalsilva@gmail.com",
    status: "pending",
    languages: ["c#", "java"],
  },
  {
    firstName: "Sarath",
    lastName: "Silva",
    age: 32,
    email: "sarathsilva@gmail.com",
    status: "active",
    languages: ["javascript"],
  },
];

// async function insertManyUsers() {
//   await User.insertMany(userData);
// }

// insertManyUsers().then(() => console.log("Inserted"));

// async function Update(status) {
//   await User.updateAllInactive(status);
// }

// Update("active").then(() => console.log("all inactive"));

// list all users
async function listAll() {
  const users = await User.find().byLastName("Silva").byStatus("inactive");
  console.log(users);
  // users[2].sayHi();
  // console.log(users[0].fullName());
  // console.log(users[0].isAbove(30));

  // const user = await User.findByEmail("kamalsilva@gmail.com");
  // console.log(user);
}

listAll();

// async function deleteAll() {
//   await User.deleteMany();
// }

// deleteAll().then(() => console.log("Deleted"));
