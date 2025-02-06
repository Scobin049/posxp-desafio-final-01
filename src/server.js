import 'dotenv/config';

import express from 'express';
import AppDataSource from './config/database.js';
import environment from './config/environment.js';
import customerRoutes from './routes/customer.route.js';

const app = express();
const {port} = environment

app.use(express.json());
app.use("/api/customers", customerRoutes);

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connected!");
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (error) {
    console.error("Database connection failed!", error);
  }
};

startServer();
