

import express from "express";

const Trialsrouter = express.Router();


Trialsrouter.get("/", (req, res) => {
  res.send(" trials route is up");
});


export default Trialsrouter;

