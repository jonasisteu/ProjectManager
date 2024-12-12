import { Request, Response } from 'express';
import { getAllCategories, getCategory, createCategory, updateCategory, deleteCategory, getProjectByCategory } from '../models/category';

export const categoryConDisplayAll = async (_req: Request, res: Response) => {
    try {
        const categories = await getAllCategories();
        res.status(200).send(categories);
    } catch {
        res.status(500).send('{"message": "Code 500: Internal Server Error}');
    }
};

export const categoryConSingle = async (req: Request, res: Response) => {
    try {   
        const name = req.params.name;
        const category = await getCategory(name);
        res.status(200).send(category);
    } catch {
        res.status(500).send('{"message": "Code 500: Internal Server Error}');
    }
};

export const categoryConAllProjects = async (req: Request, res: Response) => {
    try {
        const name = req.params.name;
        const projects = await getProjectByCategory(name);
        res.status(200).send(projects);
    } catch {
        res.status(500).send('{"message": "Code 500: Internal Server Error}');
    }
};

export const categoryConCreate = async (req: Request, res: Response) => {
    try {
        const category = await createCategory(req);
        res.status(201).send(category);
    } catch {
        res.status(500).send('{"message": "Code 500: Internal Server Error}');
    }
}

export const categoryConUpdate = async (req: Request, res: Response) => {
    try {    
        const name = req.params.name;
        const category = await updateCategory(req, name);
        res.status(201).send(category);
    } catch {
        res.status(500).send('{"message": "Code 500: Internal Server Error}');
    }
}

export const categoryConDelete = async (req: Request, res: Response) => {
    try {    
        const name = req.params.name;
        const category = await deleteCategory(name);
        res.status(201).send(category);
    } catch {
        res.status(500).send('{"message": "Code 500: Internal Server Error}');
    }
}
