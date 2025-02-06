import { EntitySchema } from "typeorm";

const Customer = new EntitySchema({
  name: "Customer",
  tableName: "customers",
  columns: {
    id: { type: "uuid", primary: true, generated: "uuid" },
    name: { type: "varchar" },
    email: { type: "varchar", unique: true },
    phone: { type: "varchar" },
    address: { type: "text" },
    created_at: { type: "timestamp", default: () => "CURRENT_TIMESTAMP" },
  },
});

export default Customer;
