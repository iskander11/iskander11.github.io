const { inlineKeyboardButtonsMapping } = require('../helpers');

const MAIN_MENU = {
	IPOTEKA: ['Ипотека', 'MAIN_MENU_IPOTEKA'],
	MATKAPITAL: ['Маткапитал', 'MAIN_MENU_MATKAPITAL'],
	SDELKI: ['Сделки', 'MAIN_MENU_SDELKI'],
	RIELTOR: ['Риэлтор', 'MAIN_MENU_RIELTOR'],
	NALOG: ['Налог(НДФЛ)', 'MAIN_MENU_NALOG'],
	HELP: ['Помощь', 'MAIN_MENU_HELP'],
};

const mainCommandsOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(MAIN_MENU, 3),
	}),
};

module.exports = { mainCommandsOpen, MAIN_MENU };
