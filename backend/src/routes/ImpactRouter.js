
import express from "express";

const ImpactRouter = express.Router();


ImpactRouter.get("/", (req, res) => {
  res.send(" impact route is up");
});


export default ImpactRouter;

