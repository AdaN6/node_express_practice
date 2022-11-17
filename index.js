import express from "express";
const app = express();
const port = process.env.PPRT || 3000;

app.get("/", (req, res) => {
  res.send("This is a get request");
});
app.post("/", (req, res) => {
  res.send("Hello this is a post request!");
});
app.put("/", (req, res) => {
  res.send("Hello this is a put request");
});
app.delete("/", (req, res) => {
  res.send("Hello this is a delete request");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
