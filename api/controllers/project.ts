import { Request, Response } from 'express';
import { connectProject, createProject, deleteProject, disconnectProject, getAllProjects, getProject, updateProject } from '../models/project';

export const projectConDisplayAll = async (_req: Request, res: Response) => {
    try {
        const projects = await getAllProjects();
        res.status(200).send(projects);
    } catch {
        res.status(500).send('{"message": "Code 500: Internal Server Error"}');
    }
};

export const projectConSingle = async (req: Request, res: Response) => {
    try {   
        const name = req.params.name;
        const project = await getProject(name);
        res.status(200).send(project);
    } catch {
        res.status(500).send('{"message": "Code 500: Internal Server Error"}');
    }
};

export const projectConCreate = async (req: Request, res: Response) => {
    try {    
        const name = req.params.name;
        const project = await createProject(req);
        res.status(201).send(project);
    } catch {
        res.status(500).send('{"message": "Code 500: Internal Server Error"}');
    }
}

export const projectConUpdate = async (req: Request, res: Response) => {
    try {    
        const name = req.params.name;
        const project = await updateProject(req,name);
        res.status(204).send(project);
    } catch {
        res.status(500).send('{"message": "Code 500: Internal Server Error"}');
    }
}

export const projectConConnect = async (req: Request, res: Response) => {
    try {    
        const name = req.params.name;
        const project = await connectProject(req,name);
        res.status(204).send(project);
    } catch {
        res.status(500).send('{"message": "Code 500: Internal Server Error"}');
    }
}

export const projectConDisconnect = async (req: Request, res: Response) => {
    try {    
        const name = req.params.name;
        const project = await disconnectProject(req,name);
        res.status(204).send(project);
    } catch {
        res.status(500).send('{"message": "Code 500: Internal Server Error"}');
    }
}

export const projectConDelete = async (req: Request, res: Response) => {
    try {    
        const name = req.params.name;
        const project = await deleteProject(name);
        res.status(204).send(project);
    } catch {
        res.status(500).send('{"message": "Code 500: Internal Server Error"}');
    }
}
