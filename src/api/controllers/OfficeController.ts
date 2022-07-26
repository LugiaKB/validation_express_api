import {NextFunction, Request, Response, Router} from 'express';
import * as service from "../../services/officeService"
import { OfficeInput, OfficeOutput } from "../../database/models/OfficeModel";

export const getAll =  async (req: Request, res: Response) => {
    const office = await service.getAll();
    res.send(office);
};

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    const film = await service.getById(parseInt(req.params.id));
    res.send(film);
};

export const create = async (req: Request, res: Response) => {
    const film = await service.create(req.body);
    res.status(201).send(film);
};

export const updateById = async (req: Request, res: Response) => {
    const film = await service.updateById(parseInt(req.params.id), req.body);
    res.status(201).send(film);
};

export const deleteById = async (req: Request, res: Response) => {
    service.deleteById(parseInt(req.params.id));
    res.status(204).send();
};