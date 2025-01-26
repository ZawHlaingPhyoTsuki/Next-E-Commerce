import { Router } from "express";
import userRoutes from "./user.routes"; // Ensure this import is correct

const router = Router();

router.use("/users", userRoutes);

export default router; // Default export
