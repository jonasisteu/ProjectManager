import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import {
  projectConConnect,
  projectConCreate,
  projectConDelete,
  projectConDisconnect,
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

projectRouter.put("/:name/connect", projectConConnect);

projectRouter.put("/:name/disconnect", projectConDisconnect);

projectRouter.delete("/:name", projectConDelete);
