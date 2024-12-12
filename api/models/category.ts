import { Request } from 'express';
import { Category, Project } from "@prisma/client";
import { prisma } from "../routes/category";

export async function getAllCategories(): Promise<Category[]> {
  const categories = await prisma.category.findMany();

  return categories;
}

export async function getCategory(name: string): Promise<Category | null> {
  const category = await prisma.category.findUnique({
    where: {
      name: name,
    },
  });

  return category;
}

export async function getProjectByCategory(name: string): Promise<Category[]> {
  const projects = await prisma.category.findMany({
    include: {
      project: true,
    },
    where: { 
      name: name,
    },
  });

  return projects;
}

export async function createCategory(req: Request): Promise<Category> {
  
  const {
    name,
    project_id,
  } = req.body;

  const category = await prisma.category.create({
    data: {
      name,
      project_id,
    },
  });

  return category;
}

export async function updateCategory(req: Request, categoryName: string): Promise<Category> {
  
  const {
    name,
    project_id,
  } = req.body;
  
  const post = await prisma.category.update({
    where: {
      name: categoryName,
    },
    data: {
      name,
      project_id,
    },
  });
  
  return post;
};

export async function deleteCategory(cateName: string): Promise<Category> {

  const post = await prisma.category.delete({
    where: {
      name: cateName,
    },
  });
  
  return post;
};

