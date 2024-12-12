import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import {
  projectConCreate,
  projectConDelete,
  projectConDisplayAll,
  projectConSingle,
  projectConUpdate,
} from "../controllers/project";

export const projectRouter = Router();
export const prisma = new PrismaClient();

projectRouter.get("", projectConDisplayAll);

projectRouter.get("/:name", projectConSingle);

projectRouter.post("", projectConCreate);

projectRouter.put("/:name", projectConUpdate);

projectRouter.delete("/:name", projectConDelete);
