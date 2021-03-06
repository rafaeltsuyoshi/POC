import { NextFunction, Request, Response, Router } from "express";
import { PessoasController } from "./controller";
import { validator, validatorCreate, validatorUpdate } from "./validator";

const router = Router();
const controller = new PessoasController();

// recupera todos
router.get("/", validator, async (req: Request, res: Response,next: NextFunction) => {
  try {
    const pessoas = await controller.recoverAll(req, res, next);
    res.json(pessoas)
  } catch (err) {
    return res.status(500).send(err)
  }
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
router.put("/:id", validatorUpdate, async (req: Request, res: Response,next: NextFunction) => {
  await controller.updatebyID(req, res, next);
});

// deleta uma pessoa
router.delete("/:id", validator, async (req: Request, res: Response,next: NextFunction) => {
  await controller.deletebyID(req, res, next);
});

export default router;
