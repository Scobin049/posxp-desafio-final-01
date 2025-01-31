CREATE TABLE "customers" (
  "id" uuid PRIMARY KEY DEFAULT,
  "name" varchar(255) NOT NULL,
  "email" varchar(255) UNIQUE NOT NULL,
  "phone" varchar(20),
  "address" text,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "products" (
  "id" uuid PRIMARY KEY DEFAULT,
  "name" varchar(255) NOT NULL,
  "description" text,
  "price" decimal(10,2) NOT NULL,
  "stock" int NOT NULL,
  "category" varchar(100),
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "orders" (
  "id" uuid PRIMARY KEY DEFAULT,
  "customer_id" uuid,
  "order_date" timestamp DEFAULT (now()),
  "status" varchar(50) NOT NULL CHECK (status IN ('pending', 'completed', 'canceled')),
  "total" decimal(10,2)
);

CREATE TABLE "order_items" (
  "id" uuid PRIMARY KEY DEFAULT,
  "order_id" uuid NOT NULL,
  "product_id" uuid NOT NULL,
  "quantity" int NOT NULL,
  "unit_price" decimal(10,2)
);

ALTER TABLE "orders" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("id") ON DELETE SET NULL;

ALTER TABLE "order_items" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id") ON DELETE CASCADE;
ALTER TABLE "order_items" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE CASCADE;
