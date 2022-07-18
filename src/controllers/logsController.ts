import { Request, Response } from "express";

import * as logsService from "./../services/logsService.js";

export async function countLogs(req: Request, res: Response) {
	const { id }: { id: number } = res.locals.user;

	const logs = await logsService.countLogs(id);

	res.send(logs);
}
