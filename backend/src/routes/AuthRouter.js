import express from "express";
import { LoginUser, RegisterUser } from "../controller/AuthController.js";

const Authrouter = express.Router();


Authrouter.get("/login", (req, res) => {
  res.send("auth route is up");
});

Authrouter.post("/login", LoginUser);
Authrouter.post("/register", RegisterUser);


export default Authrouter;

