import { NextFunction, Request, Response, Router } from "express";
import { PessoasController } from "./controller";
import { validator } from "./validator";

const router = Router();
const controller = new PessoasController();

// recupera todos
router.get("/", validator, async (req: Request, res: Response,next: NextFunction) => {
  const httpResponse = await controller.recoverAll(req, res, next);
  if(httpResponse) {
    return res.send(httpResponse)
  }
  return res.sendStatus(404)
});

// recupera pelo id
router.get("/:id", validator, async (req: Request, res: Response,next: NextFunction) => {
  const httpResponse = await controller.recoverbyID(req, res, next);
  if(httpResponse) {
    return res.send(httpResponse)
  }
  return res.sendStatus(404)
});

// cria dados para uma pessoa
router.post("/", validator, async (req: Request, res: Response,next: NextFunction) => {
  await controller.create(req, res, next);

});

// atualiza dados de uma pessoa
router.put("/:id", validator, async (req: Request, res: Response,next: NextFunction) => {
  const httpResponse = await controller.updatebyID(req, res, next);
  if(httpResponse) {
    return res.sendStatus(200)
  }
  return res.sendStatus(404)
});

// deleta uma pessoa
router.delete("/:id", validator, async (req: Request, res: Response,next: NextFunction) => {
  const httpResponse = await controller.deletebyID(req, res, next);
  if(httpResponse) {
    return res.sendStatus(200)
  }
  return res.sendStatus(404)
});

export default router;
