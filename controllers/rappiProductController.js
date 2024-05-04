import node_cron from "node-cron";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
import { rappiUrls } from "../utils/selectors.js";
import getMenuRappi from "../utils/rappi.js";
import rappiProduct from "../models/rappiProductModel.js";

let rappiCachePromos = null;

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
    // Lanzar todas las solicitudes en paralelo
    const results = await Promise.all([
      getMenuRappi(rappiUrls.burger_king_low),
      getMenuRappi(rappiUrls.burger_king_medium),
      getMenuRappi(rappiUrls.burger_king_high),
      getMenuRappi(rappiUrls.burger_king_high_competitive),
      getMenuRappi(rappiUrls.mostaza_low),
      getMenuRappi(rappiUrls.mostaza_medium),
      getMenuRappi(rappiUrls.mostaza_high),
      getMenuRappi(rappiUrls.mostaza_high_competitive),
    ]);

    // Filtrar productos en promoción y mapearlos con sus nombres
    const promoProducts = results.map((products, index) => {
      return {
        name: productNames[index],
        products: products.filter((product) => product.isPromo),
        last_updated: new Date(), // last_updated: new Date().setHours(new Date().getHours() + 1),
      };
    });
    rappiCachePromos = promoProducts;

    // Aplanar los resultados en un solo array
    const rappi = results.flat();
    
    // Insertar los productos en la base de datos
    await rappiProduct.insertMany(rappi);
    
    console.log("Rappi products added to the database");
  } catch (error) {
    console.error("Error adding Rappi products to the database:", error);
  }
};

// schedule the task to run every day at 9:30 am
node_cron.schedule("30 10 * * *", scheduleFunction, { timezone: "America/Argentina/Buenos_Aires" });
// schedule the task to run every day at 12:00 pm
node_cron.schedule("00 14 * * *", scheduleFunction, { timezone: "America/Argentina/Buenos_Aires" });
// schedule the task to run every day at 17:00 pm
node_cron.schedule("00 18 * * *", scheduleFunction, { timezone: "America/Argentina/Buenos_Aires" });
// schedule the task to run every day at 22:00 pm
node_cron.schedule("00 23 * * *", scheduleFunction, { timezone: "America/Argentina/Buenos_Aires" });

const getAllProducts = catchAsync(async (req, res, next) => {
  const products = await rappiProduct.find();

  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
});

const getProduct = catchAsync(async (req, res, next) => {
  const product = await rappiProduct.findById(req.params.id);

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



// export cachePromos to be used in the view controller
export { rappiCachePromos, getAllProducts, getProduct};
