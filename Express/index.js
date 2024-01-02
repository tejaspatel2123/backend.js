const express = require("express");
const app = express();
let port = 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

// app.use() --> use to send response

// app.use((req, res) => {
//   console.log("request received");
//   // res.send("This is a basic responce");
//   // res.send({
//   //   fruitName: "Apple",
//   //   fruitColor: "red",
//   //   fruitPrice: "3$/kg",
//   // });
//   let page =
//     "<h1>Fruit list</h1> <ul><li>apple</li><li>banana</li><li>orange</li></ul>";
//   res.send(page);
// });

app.get("/", (req, res) => {
  res.send("ROOT PATH by get req");
});

// app.get("/:userName/", (req, res) => {
//   let { userName } = req.params;
//   res.send(`welcome back ${userName}`);
// });

app.get("/search", (req, res) => {
  let { q, key } = req.query;
  res.send(`this is your query ${q} and key is ${key}`);
});

// app.get("/contact", (req, res) => {
//   res.send("Name : Tejas patel");
// });

// app.get("/aboutUs", (req, res) => {
//   res.send("we provide service since 3003");
// });

// app.get("*", (req, res) => {
//   res.send("Soory page not found");
// });

// app.post("/", (req, res) => {
//   res.send("This is a post request");
// });
