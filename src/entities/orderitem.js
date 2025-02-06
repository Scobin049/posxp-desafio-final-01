import { EntitySchema } from "typeorm";

const OrderItem = new EntitySchema({
  name: "OrderItem",
  target: "OrderItem",
  columns: {
    id: {
      type: "uuid",
      primary: true,
      generated: "uuid",
    },
    order_id: {
      type: "uuid",
      nullable: false,
    },
    product_id: {
      type: "uuid",
      nullable: false,
    },
    quantity: {
      type: "int",
    },
    unit_price: {
      type: "decimal",
    },
  },
  relations: {
    order: {
      type: "many-to-one",
      target: "Order",
      joinColumn: true,
      onDelete: "CASCADE",
    },
    product: {
      type: "many-to-one",
      target: "Product",
      joinColumn: true,
      onDelete: "CASCADE",
    },
  },
});

export default OrderItem
