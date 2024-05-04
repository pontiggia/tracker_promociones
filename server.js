import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path: "./config.env"});
import app from "./app.js";

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
}).then(con => {
  console.log('DB connection successful!');
}).catch(err => {
  console.log(err);
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server runing on port ${port}`);
});
