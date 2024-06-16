import { Url } from "../Models/Url.js";
import shortid from "shortid";

export const urlShort = async (req, res) => {
  const longUrl = req.body.longUrl
  const shortCode = shortid.generate();
  const shortUrl = `${shortCode}`;

  // save to db
  const newUrl = new Url({
    shortCode,longUrl });
  await newUrl.save();
  
  res.render("server.ejs", { shortUrl });
};

export const getOriginalUrl = async (req, res) => {
  const shortCode = req.params.shortCode
  const urlRecod = await Url.findOne({ shortCode });
  if (urlRecod) {
    res.redirect(urlRecod.longUrl);
  } else {
    res.status(404).send("Short URL not found");
  }
}; 
