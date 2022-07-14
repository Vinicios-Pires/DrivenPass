import { Router } from "express";

const logsRouter = Router();

logsRouter.post("/card");
logsRouter.get("/card");

logsRouter.post("/wifi");
logsRouter.get("/wifi");

logsRouter.get("/logs");

export default logsRouter;
