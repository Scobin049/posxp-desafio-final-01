import { EntitySchema } from "typeorm";

const Product = new EntitySchema({
  name: "Product",
  target: "Product",
  columns: {
    id: {
      type: "uuid",
      primary: true,
      generated: "uuid",
    },
    name: {
      type: "varchar",
    },
    description: {
      type: "text",
    },
    price: {
      type: "decimal",
    },
    stock: {
      type: "int",
    },
    category: {
      type: "varchar",
    },
    created_at: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
  },
});

export default Product
