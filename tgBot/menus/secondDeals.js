const { inlineKeyboardButtonsMapping } = require('../helpers');

const SECOND_DEALS_REGLAMENT = {
	REGLAMENT: ['Регламент', 'SECOND_DEALS_REGLAMENT'],
	MAP_CONTRACT: ['Карта сделки', 'SECOND_DEALS_MAP'],
};
const secondDealsReglamentOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(SECOND_DEALS_REGLAMENT, 2),
	}),
};

const SECOND_DEALS_CONTRACTS = {
	BRON: ['Бронь', 'SECOND_DEALS_CONTRACTS_BRON'],
	ZADATOK: ['Задаток', 'SECOND_DEALS_CONTRACTS_ZADATOK'],
	AVANS: ['Аванс', 'SECOND_DEALS_CONTRACTS_AVANS'],
	PREDV_DOG: [
		'Предварительный договор купли-продажи',
		'SECOND_DEALS_CONTRACTS_PREVDOG',
	],
	OBESPECH: ['Обеспечетильный платёж', 'SECOND_DEALS_CONTRACTS_OBESPECH'],
};
const secondDealsContractsOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(SECOND_DEALS_CONTRACTS, 1),
	}),
};

module.exports = {
	SECOND_DEALS_REGLAMENT,
	secondDealsReglamentOpen,
	SECOND_DEALS_CONTRACTS,
	secondDealsContractsOpen,
};
