import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller";
// import { validate } from "../middlewares/validation.middleware";
// import { createUserSchema } from "../schemas/user.schema";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);

export default router; // Default export
