import express from "express";
const app = express();
const port = process.env.PPRT || 3000;

app
.route('/')
.get("/", (req, res) => {
  res.send("This is a get request");
});
post("/", (req, res) => {
  res.send("Hello this is a post request!");
});
put("/", (req, res) => {
  res.send("Hello this is a put request");
});
delete("/", (req, res) => {
  res.send("Hello this is a delete request");
});
listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
