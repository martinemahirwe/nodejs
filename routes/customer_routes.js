import express from "express";
import {
  getCustomers,
  postCustomers,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById,
} from "../controllers/customer_controllers.js";

const router = express.Router();

// Get all customers
router.get("/", getCustomers);

// Create a new customer
router.post("/", postCustomers);

// Get a specific customer by ID
router.get("/:id", getCustomerById);

// Update a specific customer by ID
router.patch("/:id", updateCustomerById);

// Delete a specific customer by ID
router.delete("/:id", deleteCustomerById);

export default router;
