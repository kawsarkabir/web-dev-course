const express = require("express");
var cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From My frist server");
});

app.get("/data", (req, res) => {
  res.send("data is comming");
});

const users = [
  {
    id: 1,
    name: "sabana",
    email: "sabana@gmail.com",
  },
  {
    id: 2,
    name: "sabnur",
    email: "sabnur@gmail.com",
  },
  {
    id: 3,
    name: "sabila",
    email: "sabila@gmail.com",
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});
app.post("/users", (req, res) => {
  console.log(req.body);
  const newUSer = req.body;
  newUSer.id = users.length + 1;
  users.push(newUSer);
  res.send(newUSer);
});

app.listen(port, () => {
  console.log(`server is runing on port: ${port}`);
});
