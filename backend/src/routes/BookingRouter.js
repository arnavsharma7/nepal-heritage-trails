import express from "express";

const Bookingrouter = express.Router();


Bookingrouter.get("/", (req, res) => {
  res.send(" booking route is up");
});


export default Bookingrouter;

