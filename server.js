import express from "express";
import mongoose from "mongoose";
import {urlShort , getOriginalUrl } from "./Controllers/url.js"

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://manishkp842:4Qp6F0oDHLZugRkG@shortner.jafa43c.mongodb.net",{
    "dbName":"url_shortner"
}
).then(() => console.log("Database Connected"))
.catch((error) => console.log(error));


app.get(`/`, (req,res) => {
  res.render("Server.ejs",{shortUrl: null});
});

// hendel url 
app.post("/shorten",urlShort)

// redirect to orignal url
app.get("/:shortCode", getOriginalUrl)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});