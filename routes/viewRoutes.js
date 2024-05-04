import express from "express";
import { authController } from "../controllers/authController.js";
import { viewController } from "../controllers/viewController.js";

const router = express.Router();

router.get('/', viewController.getLoginForm);

router.use(authController.protect);

router.get('/home', authController.isLoggedIn, viewController.getHomePage);

router.get('/rappi/:id', authController.isLoggedIn, viewController.getRappiPromos)
    
router.get('/pedidosya/:id', authController.isLoggedIn, viewController.getPedidosYaPromos)

router.get('/history', authController.isLoggedIn, viewController.getHistoryPage);

router.get('/export-excel', authController.isLoggedIn, viewController.getExcelPage);

router.get('/admin', authController.restrictTo('admin'), viewController.getAdminPage);

export default router;