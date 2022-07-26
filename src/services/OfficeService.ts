import * as repository from "../database/repositories/OfficeRepository"
import { OfficeInput, OfficeOutput } from "../database/models/OfficeModel";

export const getAll = async (): Promise<OfficeOutput[]> => {
    return await repository.getAll();
};

export const getById = async (id: number): Promise<OfficeOutput> => {
    return await repository.getById(id);
}

export const create = async (payload: OfficeInput) => {
    return await repository.create(payload);
}

export const updateById = async (id: number, payload: OfficeInput): Promise<OfficeOutput> => {
    return await repository.updateById(id, payload);
}

export const deleteById = async (id: number): Promise<void> => {
    return await repository.deleteById(id);
}