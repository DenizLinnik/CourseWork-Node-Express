import { Request, Response } from "express";
import { Sessions } from "../models/models";

class SessionsCreate {
  async create(req: Request, res: Response) {
    try {
      const { posterId, movietheatersId, dataSession } = req.body;
      const movieTheaters = await Sessions.create({ posterId, movietheatersId, dataSession });
      res.status(200).json(movieTheaters);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const all = await Sessions.findAll();
      res.status(200).json(all);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const one = await Sessions.findOne({ where: { id: id } });
      res.status(200).json(one);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Sessions.destroy({ where: { id: id } });
      res.status(200).json({message: "Модель удалена"});
    } catch (e) {
      res.status(400).json(e);
    }
  }

}

export default new SessionsCreate();
