const { inlineKeyboardButtonsMapping } = require('../helpers');

const DEALS = {
	FORM: ['Форма', 'DEALS_FORM'],
	CALCULATIONS: ['Расчеты', 'DEALS_CALCULATIONS'],
	REGLAMENT: ['Регламент сделки', 'DEALS_REGLAMENT'],
	DOCUMENTS: ['Документы', 'DEALS_DOCUMENTS'],
	CONTRACTS: ['Договора', 'DEALS_CONTRACTS'],
};

const dealsMenuOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(DEALS, 2),
	}),
};

const DEALS_FORM = {
	PPF: ['Простая письменная форма', 'DEALS_FORM_PPF'],
	NOTARIAL: ['Нотариальная форма', 'DEALS_FORM_NOTARIAL'],
};

const dealsFormOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(DEALS_FORM, 1),
	}),
};

const DEALS_FORM_PPF = {
	EXPENCES: ['Расходы', 'DEALS_FORM_PPF_EXPENCES'],
	LOGIN: ['Регистрация', 'DEALS_FORM_PPF_LOGIN'],
	PLUS: ['Плюсы', 'DEALS_FORM_PPF_LOGIN_PLUS'],
	MINUS: ['Минусы', 'DEALS_FORM_PPF_LOGIN_MINUS'],
};

const dealsFormPPFOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(DEALS_FORM_PPF, 2),
	}),
};
const DEALS_FORM_PPF_LOGIN = {
	MAIL: ['Электронная', 'DEALS_FORM_PPF_LOGIN_MAIL'],
	MFC: ['МФЦ', 'DEALS_FORM_PPF_LOGIN_MFC'],
};
const dealsFormPPFLoginOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(DEALS_FORM_PPF_LOGIN, 2),
	}),
};

const DEALS_DOCUMENTS = {
	SELLER: ['Продавец', 'DEALS_DOCUMENTS_SELLER'],
	BUYER: ['Покупатель', 'DEALS_DOCUMENTS_BUYER'],
};

const dealsDocumentsOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(DEALS_DOCUMENTS, 2),
	}),
};

const DEALS_FORM_NOTARIAL = {
	LOGIN: ['Регистрация', 'DEALS_FORM_NOTARIAL_LOGIN'],
	EXPENCES: ['Расходы', 'DEALS_FORM_NOTARIAL_EXPENCES'],
	PLUS: ['Плюсы', 'DEALS_FORM_NOTARIAL_PLUS'],
	MINUS: ['Минусы', 'DEALS_FORM_NOTARIAL_MINUS'],
};

const dealsFormNotarialOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(DEALS_FORM_NOTARIAL, 2),
	}),
};
const DEALS_FORM_NOTARIAL_EXPENCES = {
	IMPORTANT_FORM: [
		'Обязательная нотариальная форма',
		'DEALS_FORM_NOTARIAL_EXPENCES_IMPORTANT_FORM',
	],
};
const dealsFormNotarialExpencesOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(
			DEALS_FORM_NOTARIAL_EXPENCES,
			1,
		),
	}),
};

module.exports = {
	DEALS,
	dealsMenuOpen,
	DEALS_FORM,
	dealsFormOpen,
	DEALS_FORM_PPF,
	dealsFormPPFOpen,
	DEALS_FORM_PPF_LOGIN,
	dealsFormPPFLoginOpen,
	DEALS_DOCUMENTS,
	dealsDocumentsOpen,
	DEALS_FORM_NOTARIAL,
	dealsFormNotarialOpen,
	DEALS_FORM_NOTARIAL_EXPENCES,
	dealsFormNotarialExpencesOpen,
};
