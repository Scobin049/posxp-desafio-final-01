import customerService from '../services/customer.service.js';

class CustomerController {
  async createCustomer(req, res) {
    try {
      const data = req.body; 
      const customer = await customerService.createCustomer(data); 
      res.status(201).json(customer); 
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }
  
  async updateCustomer(req, res) {
    try {
      const { id } = req.params; 
      const data = req.body; 
      const updatedCustomer = await customerService.updateCustomer(id, data); 
      res.status(200).json(updatedCustomer); 
    } catch (error) {
      res.status(404).json({ error: error.message }); 
    }
  }

  async deleteCustomer(req, res) {
    try {
      const { id } = req.params; 
      await customerService.deleteCustomer(id); 
      res.status(200).json({ message: "Customer deleted successfully" }); 
    } catch (error) {
      res.status(404).json({ error: error.message }); 
    }
  }

  async countCustomers(req, res) {
    try {
      const count = await customerService.countCustomers();
      res.status(200).json({ count });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllCustomers(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query; 
      const customers = await customerService.getAllCustomers(page, limit); 
      res.status(200).json(customers); 
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }
  
  async getCustomerById(req, res) {
    try {
      const { id } = req.params; 
      const customer = await customerService.getCustomerById(id); 
      res.status(200).json(customer); 
    } catch (error) {
      res.status(404).json({ error: error.message }); 
    }
  }

  async getCustomerByName(req, res) {
    try {
      const { name } = req.params;
      const customer = await customerService.getCustomerByName(name);
      res.status(200).json(customer);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

export default new CustomerController();
