import Customer from "../models/customer.js";

// Get all customers
export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.send(customers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new customer
export const postCustomers = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get a specific customer by ID
export const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update a specific customer by ID
export const updateCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // return the modified document rather than the original
      runValidators: true, // run model validation before update
    });
    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a specific customer by ID
export const deleteCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
