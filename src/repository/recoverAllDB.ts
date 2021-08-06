const db = require("/home/ryamashita/Downloads/POC/src/db/models")
const pessoas = db.sequelize
const Op = db.Sequelize.Op
import { Request, Response, NextFunction } from "express";

exports.findall = (req: Request, res: Response) => {

    pessoas.findAll({})
    .then((data: any) => {
      res.send(data);
    })
    .catch((err: any) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
}