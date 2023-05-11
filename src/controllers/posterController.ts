import { Request, Response } from "express";
import { Poster } from "../models/models";

class PosterControllerCreate {
  async create(req: Request, res: Response) {
    try {
      const { name, description, agerestriction, data } = req.body;
      const posterCreate = await Poster.create({ name, description, agerestriction, data });
      res.status(200).json(posterCreate);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const type = await Poster.findAll();
      res.status(200).json(type);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const one = await Poster.findOne({ where: { id: id } });
      res.status(200).json(one);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async updateRating(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const numberRating: number = +req.query.numberRating;
      const sumofratingsDevice: number = (
        await Poster.findOne({ where: { id: id } })
      ).dataValues.sumofratings;
      const numberofratingsDevice: number = (
        await Poster.findOne({ where: { id: id } })
      ).dataValues.numberofratings;
      await Poster.update(
        {
          sumofratings: sumofratingsDevice + numberRating,
          numberofratings: numberofratingsDevice + 1,
        },
        { where: { id: id } }
      );
      await Poster.update({rating : (await Poster.findOne({where: {id: id}})).dataValues.sumofratings /
      (await Poster.findOne({where: {id: id}})).dataValues.numberofratings}, { where: { id: id }})
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Poster.destroy({where: {id: id}})
      res.status(200).json({messege: "модель удалена"});
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new PosterControllerCreate();
