import { Router } from "express";
import Health from "./health";
import Pessoas from "./pessoas";

const router = Router();

router.use("/health", Health);

router.use("/pessoas", Pessoas);

export default router;