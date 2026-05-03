
import express from "express";

const Experincesrouter = express.Router();


Experincesrouter.get("/", (req, res) => {
  res.send(" experinces route is up");
});


export default Experincesrouter;

