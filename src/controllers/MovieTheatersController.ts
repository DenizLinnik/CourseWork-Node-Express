import { Request, Response } from "express";
import { MovieTheaters } from "../models/models";

class MovieTheatersCreate {
  async create(req: Request, res: Response) {
    try {
      const { name, address } = req.body;
      const movieTheaters = await MovieTheaters.create({ name, address });
      res.status(200).json(movieTheaters);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const all = await MovieTheaters.findAll();
      res.status(200).json(all);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const one = await MovieTheaters.findOne({ where: { id: id } });
      res.status(200).json(one);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await MovieTheaters.destroy({ where: { id: id } });
      res.status(200).json({message: "Модель удалена"});
    } catch (e) {
      res.status(400).json(e);
    }
  }

}

export default new MovieTheatersCreate();
