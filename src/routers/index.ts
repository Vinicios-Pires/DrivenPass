import { Router } from "express";
import authRouter from "./authRouter.js";
import credentialsRouter from "./credentialsRouter.js";
import logsRouter from "./logsRouter.js";

const router = Router();

router.use(authRouter);
router.use(credentialsRouter);
router.use(logsRouter);

export default router;
