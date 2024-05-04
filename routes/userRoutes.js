import express from "express";
import { userController } from "../controllers/userController.js";
import { authController } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", authController.login);

router.use(authController.protect); // protect all routes after this middleware

router.get('/logout', authController.logout);

router.use(authController.restrictTo("admin"));

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export default router;
