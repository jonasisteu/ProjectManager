import { Request } from 'express';
import { Category } from "@prisma/client";
import { prisma } from "../routes/category";

export async function getAllCategories(): Promise<Category[]> {
  const categories = await prisma.category.findMany();

  return categories;
}

export async function getCategory(title: string): Promise<Category[]> {
  const category = await prisma.category.findMany({
    where: {
      title: title,
    },
  });

  return category;
}

export async function getProjectByCategory(title: string): Promise<Category[]> {
  const projects = await prisma.category.findMany({
    include: {
      Project: true,
    },
    where: { 
      title: title,
    },
  });

  return projects;
}

export async function createCategory(req: Request): Promise<Category> {
  
  const {
    title,
  } = req.body;

  const category = await prisma.category.create({
    data: {
      title,
      Project : {},
    },
  });

  return category;
}

export async function updateCategory(req: Request, categoryTitle: string): Promise<Category> {
  
  const {
    title,
  } = req.body;
  
  const post = await prisma.category.update({
    where: {
      title: categoryTitle,
    },
    data: {
      title,
      Project: {},
    },
  });
  
  return post;
};

export async function deleteCategory(cateTitle: string): Promise<Category> {

  const post = await prisma.category.delete({
    where: {
      title: cateTitle,
    },
  });
  
  return post;
};

