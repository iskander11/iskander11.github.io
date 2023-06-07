const { inlineKeyboardButtonsMapping } = require('../helpers');
const HELP = {
	TELEPHONS: ['Нужные телефоны', 'HELP_TELEPHONS'],
	QUESTION: ['Вопрос', 'HELP_QUESTION'],
	SOVETI_GURU: ['Советы гуру', 'HELP_GURU_ASK'],
};

const helpOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(HELP, 2),
	}),
};

module.exports = { HELP, helpOpen };
