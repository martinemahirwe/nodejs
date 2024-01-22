import mongoose from "mongoose";
import express from "express";
import routes from "./routes/customer_routes.js";
//import dotenv from "dotenv";

mongoose.set("strictQuery", false);
//dotenv.config();
const port = 5000;

const app = express();
// const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/customers", routes);

mongoose
  .connect(
    "mongodb+srv://<username>:<password>@customerapi.jnaqr88.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () =>
      console.log(`Server running on :http://localhost:${port}`)
    );
  })
  .catch((error) => console.log(error.message));
