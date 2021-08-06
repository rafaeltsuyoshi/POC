import { Router } from "express";
import Health from "./health";
const router = Router();

router.use("/health", Health);

export default router;