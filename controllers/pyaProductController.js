import node_cron from "node-cron";
import pyaProduct from "../models/pyaProductModel.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
import { pedidosyaUrls } from "../utils/selectors.js";
import getMenuPedidosYa from "../utils/pedidosya.js";

let pyaCachePromos = null;

const productNames = [
  "burger-king-low",
  "burger-king-medium",
  "burger-king-high",
  "burger-king-high-competitive",
  "mostaza-low",
  "mostaza-medium",
  "mostaza-high",
  "mostaza-high-competitive",
];

const scheduleFunction = async () => {
  try {
    const results = await Promise.all([
      getMenuPedidosYa(pedidosyaUrls.burger_king_low),
      getMenuPedidosYa(pedidosyaUrls.burger_king_medium),
      getMenuPedidosYa(pedidosyaUrls.burger_king_high),
      getMenuPedidosYa(pedidosyaUrls.burger_king_high_competitive),
      getMenuPedidosYa(pedidosyaUrls.mostaza_low),
      getMenuPedidosYa(pedidosyaUrls.mostaza_medium),
      getMenuPedidosYa(pedidosyaUrls.mostaza_high),
      getMenuPedidosYa(pedidosyaUrls.mostaza_high_competitive),
    ]);

    const promoProducts = results.map((products, index) => {
      return {
        name: productNames[index],
        products: products.filter((product) => product.isPromo),
        last_updated: new Date().setHours(new Date().getHours() - 3),
      };
    });

    pyaCachePromos = promoProducts;

    const pya = results.flat();

    await pyaProduct.insertMany(pya);
    console.log("PedidosYa products added to the database");
  } catch (error) {
    console.error("Error adding PedidosYa products to the database:", error);
  }
};

// schedule the task to run every day at 9:30 am
node_cron.schedule("30 10 * * *", scheduleFunction, { timezone: "America/Argentina/Buenos_Aires" });
// schedule the task to run every day at 12:00 pm
node_cron.schedule("00 14 * * *", scheduleFunction, { timezone: "America/Argentina/Buenos_Aires" });
// schedule the task to run every day at 17:00 pm
node_cron.schedule("00 18 * * *", scheduleFunction, { timezone: "America/Argentina/Buenos_Aires" });
// schedule the task to run every day at 22:00 pm
node_cron.schedule("00 22 * * *", scheduleFunction, { timezone: "America/Argentina/Buenos_Aires" });

export const getAllProducts = catchAsync(async (req, res, next) => {
  const products = await pyaProduct.find();

  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
});

export const getProduct = catchAsync(async (req, res, next) => {
  const product = await pyaProduct.findById(req.params.id);

  if (!product) {
    return next(new AppError("No product found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

export { pyaCachePromos }
