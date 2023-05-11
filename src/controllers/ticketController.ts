import { Request, Response } from "express";
import { Ticket } from "../models/models";

class PosterControllerCreate {
  async create(req: Request, res: Response) {
    try {
      const { posterId, quantity } = req.body;
      const posterCreate = await Ticket.create({ posterId, quantity });
      res.status(200).json(posterCreate);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const type = await Ticket.findAll();
      res.status(200).json(type);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query;
      const one = await Ticket.findOne({ where: { id: id.id } });
      res.status(200).json(one);
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new PosterControllerCreate();
