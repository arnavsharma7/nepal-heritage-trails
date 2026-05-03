
import express from "express";
import { GetProfile } from "../controller/UserController.js";
import { authenticateToken } from "../middleware/auth.js";

const Userrouter = express.Router();

Userrouter.get("/", (req, res) => {
  res.send(" user route is up");
});

Userrouter.get("/profile", authenticateToken, GetProfile);


export default Userrouter;

