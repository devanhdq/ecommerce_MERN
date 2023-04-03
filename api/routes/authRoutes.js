import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

// register
router.post("/register", registerController);

// login
router.post("/login", loginController);

// demo
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
