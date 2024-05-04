import express from "express";
import { filterProducts, exportDataToExcel } from "../controllers/queryController.js";
import { authController } from "../controllers/authController.js";

const router = express.Router();

router.use(authController.protect);

router.route("/history").post(filterProducts);

router.route("/export").post(exportDataToExcel);

export default router;