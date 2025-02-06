import { Router } from "express";
import customerController from "../controllers/customer.controller.js";
const router = Router();

router.post("/", customerController.createCustomer);
router.put("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

router.get("/:id", customerController.getCustomerById);
router.get("/", customerController.getAllCustomers);
router.get("/count", customerController.countCustomers);
router.get("/name/:name", customerController.getCustomerByName);

export default router;

