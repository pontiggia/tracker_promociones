import express from "express";
import path from "path";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import hpp from "hpp";

import AppError from "./utils/appError.js";
import globalErrorHandler from "./controllers/errorController.js";
import userRoutes from "./routes/userRoutes.js";
import pyaRoutes from "./routes/pyaRoutes.js";
import rappiRoutes from "./routes/rappiRoutes.js";
import viewRoutes from "./routes/viewRoutes.js";
import productsRoute from "./routes/productsRoute.js";

const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug"); // Establece PUG como el motor de plantillas
app.set("views", path.join(__dirname, "views")); // Directorio donde se encuentran las plantillas

// Set security HTTP headers
app.use(helmet());

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());


app.use("/api/v1/users", userRoutes);
app.use("/api/v1/rappi", rappiRoutes);
app.use("/api/v1/pya/products", pyaRoutes);
app.use("/api/v1/products", productsRoute);
app.use("/", viewRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export default app;
