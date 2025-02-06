import { EntitySchema } from "typeorm";

const Order = new EntitySchema({
  name: "Order",
  target: "Order",
  columns: {
    id: {
      type: "uuid",
      primary: true,
      generated: "uuid",
    },
    customer_id: {
      type: "uuid",
      nullable: false,
    },
    order_date: {
      type: "timestamp",
      default: () => "CURRENT_TIMESTAMP",
    },
    status: {
      type: "varchar",
    },
    total: {
      type: "decimal",
    },
  },
  relations: {
    customer: {
      type: "many-to-one",
      target: "Customer",
      joinColumn: true,
      onDelete: "CASCADE",
    },
  },
});

export default Order
