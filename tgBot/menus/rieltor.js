const { inlineKeyboardButtonsMapping } = require('../helpers');

const RIELTOR = {
	STAGER: ['Стажер', 'RIELTOR_STAGER'],
	AGENT: ['Агент', 'RIELTOR_AGENT'],
};

const rieltorOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(RIELTOR, 2),
	}),
};

const RIELTOR_STAGER = {
	SELLER: ['Продавец', 'RIELTOR_STAGER_SELLER'],
	BUYER: ['Покупатель', 'RIELTOR_STAGER_BUYER'],
	QUESTIONS: ['Вопросы', 'RIELTOR_STAGER_QUESTIONS'],
};

const rieltorStagerOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(RIELTOR_STAGER, 3),
	}),
};

const RIELTOR_STAGER_SELLER = {
	DOGOVOR: ['Договор', 'RIELTOR_STAGER_SELLER_DOGOVOR'],
	SOGLASHENIE: ['Соглашение', 'RIELTOR_STAGER_SELLER_SOGLASHENIE'],
	VOZRAZHENIYA: ['Возражения', 'RIELTOR_STAGER_SELLER_VOZRAZHENIYA'],
	SCRIPT: ['Скрипт', 'RIELTOR_STAGER_SELLER_SCRIPT'],
	CHEK_LIST: ['Чек-лист', 'RIELTOR_STAGER_SELLER_CHECK_LIST'],
	TEH_ZADANIE: [
		'Технические характеристики',
		'RIELTOR_STAGER_SELLER_TEH_ZADANIE',
	],
	KRUCKI: ['Крючки', 'RIELTOR_STAGER_SELLER_KRUCKI'],
	LIST_OBZVONA: ['Лист обзвона', 'RIELTOR_STAGER_SELLER_LIST_OBZVONA'],
	TETRAD_KONTAKTOV: [
		'Тетрадь контактов',
		'RIELTOR_STAGER_SELLER_TETRAD_KONTAKTOV',
	],
};
const rieltorStagerSellerOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(RIELTOR_STAGER_SELLER, 2),
	}),
};

const RIELTOR_STAGER_BUYER = {
	DOGOVOR: ['Договор', 'RIELTOR_STAGER_BUYER_DOGOVOR'],
	VOZRAZHENIYA: ['Возражения', 'RIELTOR_STAGER_BUYER_VOZRAZHENIYA'],
	CHEK_LIST: ['Чек-лист', 'RIELTOR_STAGER_BUYER_CHECK_LIST'],
	TEH_HARAKTERISTIKI: [
		'Технические характеристики',
		'RIELTOR_STAGER_BUYER_TEH_ZADANIE',
	],
	SCRIPT: ['Скрипт', 'RIELTOR_STAGER_BUYER_SCRIPT'],
};
const rieltorStagerBuyerOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(RIELTOR_STAGER_BUYER, 3),
	}),
};

const RIELTOR_STAGER_QUESTIONS = {
	OFTEN: ['Часто задаваемые', 'RIELTOR_STAGER_QUESTIONS_OFTEN'],
	RULES: ['Правила', 'RIELTOR_STAGER_QUESTIONS_RULES'],
};
const rieltorStagerQuestionOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(RIELTOR_STAGER_QUESTIONS, 2),
	}),
};

const RIELTOR_AGENT = {
	SELLER: ['Продавец', 'RIELTOR_AGENT_SELLER'],
	BUYER: ['Покупатель', 'RIELTOR_AGENT_BUYER'],
	REGLAMENT: ['Регламент', 'RIELTOR_AGENT_REGLAMENT'],
};

const rieltorAgentOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(RIELTOR_AGENT, 3),
	}),
};

const RIELTOR_AGENT_SELLER = {
	DOGOVOR: ['Договор', 'RIELTOR_AGENT_SELLER_DOGOVOR'],
	SOGLASHENIE: ['Соглашение', 'RIELTOR_AGENT_SELLER_SOGLASHENIE'],
	SCRIPT: ['Скрипт', 'RIELTOR_AGENT_SELLER_SCRIPT'],
	CHEK_LIST: ['Чек-лист', 'RIELTOR_AGENT_SELLER_CHECK_LIST'],
	TEH_HARAKTERISTIKI: [
		'Технические характеристики',
		'RIELTOR_AGENT_SELLER_TEH_ZADANIE',
	],
	OTCHET: ['Отчет', 'RIELTOR_AGENT_SELLER_OTCHET'],
	ANALITIKA: ['Аналитика', 'RIELTOR_AGENT_SELLER_ANALITIKA'],
	LIST_OBR_SVYAZI: [
		'Лист обратной связи',
		'RIELTOR_AGENT_SELLER_LIST_OBR_SVYAZI',
	],
	STAT: ['Статистика', 'RIELTOR_AGENT_SELLER_STAT'],
};
const rieltorAgentSellerOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(RIELTOR_AGENT_SELLER, 1),
	}),
};

const RIELTOR_AGENT_BUYER = {
	DOGOVOR: ['Договор', 'RIELTOR_AGENT_BUYER_DOGOVOR'],
	SCRIPT: ['Скрипт', 'RIELTOR_AGENT_BUYER_SCRIPT'],
	CHEK_LIST: ['Чек-лист', 'RIELTOR_AGENT_BUYER_CHECK_LIST'],
	TEH_HARAKTERISTIKI: [
		'Технические характеристики',
		'RIELTOR_AGENT_BUYER_TEH_ZADANIE',
	],
	KRUCKI: ['Крючки', 'RIELTOR_AGENT_BUYER_KRUCKI'],
	OFERTA: ['Оферта', 'RIELTOR_AGENT_BUYER_OFERTA'],
	PROSMOTROVOI_LIST: ['Просмотровой лист', 'RIELTOR_AGENT_BUYER_LIST'],
};

const rieltorAgentBuyerOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(RIELTOR_AGENT_BUYER, 1),
	}),
};

const RIELTOR_AGENT_REGLAMENT = {
	SOVMESTNIE: ['Совместные сделки', 'RIELTOR_AGENT_REGLAMENT_SOVMESTNIE'],
	KOMISSII: ['Комиссии', 'RIELTOR_AGENT_REGLAMENT_KOMISSII'],
	PRAVILA_SN: ['ПРАВИЛА СН', 'RIELTOR_AGENT_REGLAMENT_PRAVILA'],
	PUTI_VZAIMODEISTVIYA: [
		'Пути взаимодействия',
		'RIELTOR_AGENT_REGLAMENT_PUTI_VZAIMODEISTVIYA',
	],
};
const rieltorAgentReglamentOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(RIELTOR_AGENT_REGLAMENT, 2),
	}),
};

module.exports = {
	RIELTOR,
	rieltorOpen,
	RIELTOR_STAGER,
	rieltorStagerOpen,
	RIELTOR_STAGER_SELLER,
	rieltorStagerSellerOpen,
	RIELTOR_STAGER_BUYER,
	rieltorStagerBuyerOpen,
	RIELTOR_STAGER_QUESTIONS,
	rieltorStagerQuestionOpen,
	RIELTOR_AGENT,
	rieltorAgentOpen,
	RIELTOR_AGENT_SELLER,
	rieltorAgentSellerOpen,
	RIELTOR_AGENT_BUYER,
	rieltorAgentBuyerOpen,
	RIELTOR_AGENT_REGLAMENT,
	rieltorAgentReglamentOpen,
};
