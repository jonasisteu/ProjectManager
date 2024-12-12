import { Request } from "express";
import { Project } from "@prisma/client";
import { prisma } from "../routes/project";

export async function getAllProjects(): Promise<Project[]> {
  const projects = await prisma.project.findMany();

  return projects;
}

export async function getProject(name: string): Promise<Project | null> {
  const project = await prisma.project.findUnique({
    where: {
      name: name,
    },
  });

  return project;
}

export async function createProject(req: Request): Promise<Project> {
  const { name, description, git_url } = req.body;

  const project = await prisma.project.create({
    data: {
      name,
      description,
      git_url,
    },
  });

  return project;
}

export async function updateProject(
  req: Request,
  projectName: string
): Promise<Project> {
  const { name, description, git_url } = req.body;

  const project = await prisma.project.update({
    where: {
      name: projectName,
    },
    data: {
      name,
      description,
      git_url,
    },
  });

  return project;
}

export async function deleteProject(cateName: string): Promise<Project> {
  const project = await prisma.project.delete({
    where: {
      name: cateName,
    },
  });

  return project;
}
