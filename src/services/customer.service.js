import AppDataSource from "../config/database.js";
import Customer from "../entities/Customer.js";

class CustomerService {
  async createCustomer(data) {
    const customerRepository = AppDataSource.getRepository(Customer);
    const customer = customerRepository.create(data); 
    return await customerRepository.save(customer); 
  } 
  
  async updateCustomer(id, data) {
    const customerRepository = AppDataSource.getRepository(Customer);
    let customer = await customerRepository.findOne(id);
    if (!customer) {
      throw new Error("Customer not found");
    }
    customer = { ...customer, ...data }; 
    return await customerRepository.save(customer); 
  }

  async deleteCustomer(id) {
    const customerRepository = AppDataSource.getRepository(Customer);
    const customer = await customerRepository.findOne(id);
    if (!customer) {
      throw new Error("Customer not found");
    }
    await customerRepository.remove(customer); 
    return { message: "Customer deleted successfully" };
  }

  async countCustomers() {
    const customerRepository = AppDataSource.getRepository(Customer);
    return await customerRepository.count();
  }

  async getAllCustomers(page = 1, limit = 10) {
    const customerRepository = AppDataSource.getRepository(Customer);
    
    const [customers, total] = await customerRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return {
      data: customers,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }

  async getCustomerById(id) {
    const customerRepository = AppDataSource.getRepository(Customer);
    const customer = await customerRepository.findOne(id);
    if (!customer) {
      throw new Error("Customer not found");
    }
    return customer;
  }

  async getCustomerByName(name) {
    const customerRepository = AppDataSource.getRepository(Customer);
    const customers = await customerRepository.find({ where: { name } });
    return customers;
  }
}

export default new CustomerService();
