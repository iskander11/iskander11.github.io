const { inlineKeyboardButtonsMapping } = require('../helpers');

const IPOTEKA = {
	STAVKI: ['Ставки', 'IPOTEKA_STAVKI'],
	PROGRAMS: ['Программы', 'IPOTEKA_PROGRAMS'],
	REQUREMENTS_BORROWER: [
		'Требования к заёмщику',
		'IPOTEKA_REQUIREMENTS_BORROWER',
	],
	VID: ['Вид', 'IPOTEKA_VID'],
};

const IPOTEKA_VID = {
	CIVIL: ['Гражданская', 'IPOTEKA_VID_CIVIL'],
	MILITARY: ['Военная', 'IPOTEKA_VID_MILITARY'],
};

const ipotekaCommandsOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(IPOTEKA, 2),
	}),
};

const ipotekaVidOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(IPOTEKA_VID, 2),
	}),
};

module.exports = { ipotekaCommandsOpen, ipotekaVidOpen, IPOTEKA, IPOTEKA_VID };
