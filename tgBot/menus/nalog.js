const { inlineKeyboardButtonsMapping } = require('../helpers');

const NALOG = {
	BAZA: ['База', 'NALOG_BAZA'],
	VICETI: ['Вычеты', 'NALOG_VICETI'],
	PRAVILA_NACHISLENIYA: ['Правила начисления', 'NALOG_PRAVILA'],
};

const nalogOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(NALOG, 2),
	}),
};

const NALOG_PRAVILA = {
	NASLEDSTVO: ['Наследство', 'NALOG_PRAVILA_NASLEDSTVO'],
	PRIVATIZACIYA: ['Приватизация', 'NALOG_PRAVILA_PRIVATIZACIYA'],
	KUPLYA_PRODAZHA: ['Договор купли-продажи', 'NALOG_PRAVILA_KUPLYA_PRODAZHA'],
	DARENIE: ['Дарение', 'NALOG_PRAVILA_DARENIE'],
	DOLEVOE_UCHASTIE: [
		'Договор долевого участия',
		'NALOG_PRAVILA_DOLEVOE_UCHASTIE',
	],
};
const nalogPravilaOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(NALOG_PRAVILA, 2),
	}),
};

module.exports = {
	NALOG,
	nalogOpen,
	NALOG_PRAVILA,
	nalogPravilaOpen,
};
