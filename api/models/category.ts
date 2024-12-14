import { Request } from 'express';
import { Category, Project } from "@prisma/client";
import { prisma } from "../routes/category";

export async function getAllCategories(): Promise<Category[]> {
  const categories = await prisma.category.findMany();

  return categories;
}

export async function getCategory(name: string): Promise<Category[]> {
  const category = await prisma.category.findMany({
    where: {
      name: name,
    },
  });

  return category;
}

export async function getProjectByCategory(name: string): Promise<Category[]> {
  const projects = await prisma.category.findMany({
    include: {
      Project: true,
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
  } = req.body;

  const category = await prisma.category.create({
    data: {
      name,
      Project : {},
    },
  });

  return category;
}

export async function updateCategory(req: Request, categoryName: string): Promise<Category> {
  
  const {
    name,
  } = req.body;
  
  const post = await prisma.category.update({
    where: {
      name: categoryName,
    },
    data: {
      name,
      Project: {},
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

