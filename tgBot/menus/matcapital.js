const { inlineKeyboardButtonsMapping } = require('../helpers');
const MATKAPITAL = {
	SROKI: ['Сроки', 'MATKAPITAL_SROKI'],
	IMPORTANT: ['Важно', 'MATKAPITAL_IMPORTANT'],
	OBJECTS: ['Объекты', 'MATKAPITAL_OBJECTS'],
	SIZE: ['Размер', 'MATKAPITAL_SIZE'],
};
const matkapitalCommandsOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(MATKAPITAL, 2),
	}),
};
module.exports = { MATKAPITAL, matkapitalCommandsOpen };
