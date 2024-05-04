import ExcelJS from "exceljs";
import moment from "moment-timezone";
import rappiProduct from "../models/rappiProductModel.js";
import pyaProduct from "../models/pyaProductModel.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";

// function to filter the products by date, promo, and category dinamically in the view controller
const filterProducts = catchAsync(async (req, res, next) => {
  const dateStart = req.body.dateStart + "T" + req.body.time + ":00.000Z";
  const dateEnd = req.body.endDate + "T" + req.body.time + ":00.000Z";

  const restaurant = req.body.restaurant;

  const start = new Date(dateStart);
  const end = new Date(dateEnd);
  // add 1 minute to the end date to include all the products from that day
  end.setMinutes(end.getMinutes() + 1);

  let products;
  let site;

  if (isNaN(start) || isNaN(end)) {
    return next(new Error("Invalid date format"));
  }

  const query = {
    createdAt: { $gte: start, $lte: end },
    restaurant: { $regex: restaurant, $options: "i" },
  };

  if (req.body.promo === "true") {
    query.isPromo = true;
  }

  if (req.body.site === "Rappi") {
    products = await rappiProduct.find(query);
    site = "rappiProducts";
  } else {
    products = await pyaProduct.find(query);
    site = "pyaProducts";
  }

  res.status(200).json({
    status: "success",
    data: {
      [site]: products,
    },
  });
});

const exportDataToExcel = catchAsync(async (req, res, next) => {
  const products = req.body.data.rappiProducts || req.body.pyaProducts;
  let workbook = new ExcelJS.Workbook();
  let worksheet = workbook.addWorksheet("Products");

  // Create the header row
  // Create the header row
  worksheet.columns = [
    { header: "Nombre del producto", key: "productName", width: 25 },
    { header: "Precio original", key: "originalPrice", width: 15 },
    { header: "Precion con descuento", key: "discountPrice", width: 15 },
    { header: "Porcentaje", key: "percentageDiscount", width: 10 },
    { header: "Categoria", key: "category", width: 25 },
    { header: "Restaurant", key: "restaurant", width: 25 },
    { header: "Promo", key: "promo", width: 15 },
    { header: "Creado el", key: "createdAt", width: 20 },
    // Add other columns as needed
  ];

  // Add rows to the worksheet
  products.forEach((product) => {
    let date = new Date(product.createdAt);
    date.setHours(date.getHours() + 3);
    product.createdAt = date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric' });

    worksheet.addRow({
      productName: product.product_name,
      originalPrice: product.original_price,
      discountPrice: product.discount_price,
      percentageDiscount: product.percentage,
      category: product.category,
      restaurant: product.restaurant,
      promo: product.isPromo,
      createdAt: product.createdAt,
    });
  });

  // Write to a buffer
  let buffer = await workbook.xlsx.writeBuffer();

  // Set the headers and send the file
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader("Content-Disposition", "attachment; filename=Products.xlsx");
  res.send(buffer);
});

export { filterProducts, exportDataToExcel };
