import express from "express";
import { getAllProducts } from "../controllers/pyaProductController.js";
import { authController } from "../controllers/authController.js";

const router = express.Router();

router.use(authController.protect);

router
  .route("/")
  .get(getAllProducts)


export default router;
