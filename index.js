import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app
.route('/')
.get((req, res) => {
  res.send("This is a get request")
})
.post((req, res) => {
  res.send("Hello this is a post request!")
})
.put((req, res) => {
  res.send("Hello this is a put request")
})
.delete((req, res) => {
  res.send("Hello this is a delete request")
})

// redirect example

app.get('/getexample', (req,res) => {res.redirect("/")})

//making it dynamic

app.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.query.sort);
    res.send(
     `req.params is id and the value is ${req.params.id}\n req.query is ${req.query.sort}`);
    })


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
