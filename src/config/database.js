import { DataSource } from "typeorm";
import environment from "./environment.js";
const {database} = environment

const AppDataSource = new DataSource({
  type: "postgres",
  host: database.host,
  port: database.port,
  username: database.username,
  password: database.password,
  database: database.database,
  synchronize: true,
  logging: false,
  entities: ["src/entities/*.js"],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
