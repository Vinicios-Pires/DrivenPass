import * as logsRepository from "./../repositories/logsRepository.js";

export async function countLogs(id: number) {
	const numberCredentials = await logsRepository.countCredentials(id);
	const numberNotes = await logsRepository.countNotes(id);
	const numberCards = await logsRepository.countCards(id);
	const numberWifi = await logsRepository.countWifi(id);

	return {
		credentials: numberCredentials,
		notes: numberNotes,
		cards: numberCards,
		wifi: numberWifi,
	};
}
