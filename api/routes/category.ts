import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import {
  categoryConDisplayAll,
  categoryConSingle,
  categoryConUpdate,
  categoryConDelete,
  categoryConCreate,
} from "../controllers/category";

export const categoryRouter = Router();
export const prisma = new PrismaClient();

categoryRouter.get("", categoryConDisplayAll);

categoryRouter.get("/:name", categoryConSingle);

categoryRouter.post("", categoryConCreate);

categoryRouter.put("/:name", categoryConUpdate);

categoryRouter.delete("/:name", categoryConDelete);
