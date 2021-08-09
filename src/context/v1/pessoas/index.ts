import { NextFunction, Request, Response, Router } from "express";
import { PessoasController } from "./controller";
import { validator, validatorCreate } from "./validator";

const router = Router();
const controller = new PessoasController();

// recupera todos
router.get("/", validator, async (req: Request, res: Response,next: NextFunction) => {
  await controller.recoverAll(req, res, next);
});

// recupera pelo id
router.get("/:id", validator, async (req: Request, res: Response,next: NextFunction) => {
  await controller.recoverbyID(req, res, next);
});

// cria dados para uma pessoa
router.post("/", validatorCreate, async (req: Request, res: Response,next: NextFunction) => {
  await controller.create(req, res, next);
});

// atualiza dados de uma pessoa
router.put("/:id", validator, async (req: Request, res: Response,next: NextFunction) => {
  await controller.updatebyID(req, res, next);
});

// deleta uma pessoa
router.delete("/:id", validator, async (req: Request, res: Response,next: NextFunction) => {
  await controller.deletebyID(req, res, next);
});

export default router;
