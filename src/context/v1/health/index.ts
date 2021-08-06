import { Router } from "express";
import { HealthController } from "./controller";
import { validator } from "./validator";

const router = Router();
const controller = new HealthController();

router.get("/", validator, async (req, res, next) => {
  const httpResponse = await controller.handle();
  if(httpResponse){
      return res.sendStatus(200);
  }
  return res.sendStatus(500);
});

export default router;
