import User from "../models/userModel.js";
import pyaProduct from "../models/pyaProductModel.js";
import rappiProduct from "../models/rappiProductModel.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
import { rappiCachePromos } from "./rappiProductController.js";
import { pyaCachePromos } from "./pyaProductController.js";

export const getLoginForm = (req, res) => {
  res.status(200).render("login", {
    title: "Log into your account",
  });
};


// Promos section

export const getHomePage = catchAsync(async (req, res, next) => {
  // check if the user is an admin
  const user = await User.findById(req.user.id);
  res.status(200).render("index", {
    title: "Home",
    user,
  });
});

export const getRappiPromos = catchAsync(async (req, res, next) => {
  const id = req.params.id;

  if (!rappiCachePromos) {
    return next(new AppError("No promos found, retry in 5 mins", 404));
  }

  const promos = rappiCachePromos.find((item) => item.name === id);

  res.status(200).render("getRappiPromo", {
    title: id,
    results: promos.products.length,
    promos,
  });
});

export const getPedidosYaPromos = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  if (!pyaCachePromos) {
    return next(new AppError("No promos found, retry in 5 mins", 404));
  }
  const promos = pyaCachePromos.find((item) => item.name === id);

  res.status(200).render("getPyaPromo", {
    title: id,
    results: promos.products.length,
    promos,
  });
});


// history section

export const getHistoryPage = catchAsync(async (req, res, next) => {

  res.status(200).render("history", {
    title: "History"
  });
});

// Excel section

export const getExcelPage = catchAsync(async (req, res, next) => {
  res.status(200).render("excel", {
    title: "Excel",
  });
});



// Admin section

export const getAdminPage = catchAsync(async (req, res) => {
  const users = await User.find();
  res.status(200).render("admin", {
    title: "Admin",
    results: users.length,
    users,
  });
});

export const viewController = {
  getLoginForm,
  getHomePage,
  getRappiPromos,
  getPedidosYaPromos,
  getAdminPage,
  getHistoryPage,
  getExcelPage,
};
