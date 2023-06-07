const { inlineKeyboardButtonsMapping } = require('../helpers');

const THIRD_DEALS_CALCULATIONS = {
	NAL: ['Наличный', 'THIRD_DEALS_CALCULATIONS_NAL'],
	BEZNAL: ['Безналичный', 'THIRD_DEALS_CALCULATIONS_BEZNAL'],
	SERTIFICATS: ['Сертификаты', 'THIRD_DEALS_CALCULATIONS_SERTIFICATS'],
};

const thirdDealsCalculationsOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(THIRD_DEALS_CALCULATIONS, 1),
	}),
};

const THIRD_DEALS_CALCULATIONS_BEZNAL = {
	CHECKING_ACCOUNT: [
		'Расчетный счёт',
		'THIRD_DEALS_CALCULATIONS_BEZNAL_CHECKING_ACCOUNT',
	],
	ENSKROU: ['Эскроу счёт', 'THIRD_DEALS_CALCULATIONS_BEZNAL_ENSKROU_SCHET'],
	NOTARIAL_DEPOSIT: [
		'Нотариальный депозит',
		'THIRD_DEALS_CALCULATIONS_BEZNAL_NOTARIAL_DEPOSIT',
	],
};

const thirdDealsCalculationsBeznalOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(
			THIRD_DEALS_CALCULATIONS_BEZNAL,
			1,
		),
	}),
};

const THIRD_DEALS_SERTIFICATS = {
	HERSON: ['Херсон', 'THIRD_DEALS_SERTIFICATS_HERSON'],
	SIROTA: ['Сирота', 'THIRD_DEALS_SERTIFICATS_SIROTA'],
	MORE: ['Иные', 'THIRD_DEALS_SERTIFICATS_INIE'],
};
const thirdDealsSertificatsOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(THIRD_DEALS_SERTIFICATS, 3),
	}),
};
const HERSON = {
	SROKI: ['Сроки', 'HERSON_SROKI'],
	PORYADOK: ['Порядок', 'HERSON_PORYADOK'],
	OBJECT: ['Объект', 'HERSON_OBJECT'],
};
const hersonOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(HERSON, 3),
	}),
};
const SIROTA = {
	SROKI: ['Сроки', 'SIROTA_SROKI'],
	PORYADOK: ['Порядок', 'SIROTA_PORYADOK'],
	OBJECT: ['Объект', 'SIROTA_OBJECT'],
};
const sirotaOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(SIROTA, 3),
	}),
};
const THIRD_DEALS_SERTIFICATS_MORE = {
	MILIRATY: ['Военные', 'THIRD_DEALS_SERTIFICATS_MILITARY'],
	YOUNG_FAMILIES: ['Молодые семьи', 'THIRD_DEALS_SERTIFICATS_YOUNG'],
	MNOGODET: ['Многодетные семьи', 'THIRD_DEALS_SERTIFICATS_MNOGODET'],
	INVALIDI: ['Инвалиды', 'THIRD_DEALS_SERTIFICATS_INVALIDI'],
	PERESELENCI: ['Переселенцы', 'THIRD_DEALS_SERTIFICATS_PERESELENCI'],
};
const thirdDealsSertificatsMoreOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(
			THIRD_DEALS_SERTIFICATS_MORE,
			2,
		),
	}),
};
const MILIRATY = {
	SROKI: ['Сроки', 'MILIRATY_SROKI'],
	PORYADOK: ['Порядок', 'MILIRATY_PORYADOK'],
	OBJECT: ['Объект', 'MILIRATY_OBJECT'],
};

const militaryOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(MILIRATY, 3),
	}),
};

const YOUNG_FAMILIES = {
	SROKI: ['Сроки', 'YOUNG_FAMILIES_SROKI'],
	PORYADOK: ['Порядок', 'YOUNG_FAMILIES_PORYADOK'],
	OBJECT: ['Объект', 'YOUNG_FAMILIES_OBJECT'],
};

const youngFamiliesOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(YOUNG_FAMILIES, 3),
	}),
};
const MNOGODET = {
	SROKI: ['Сроки', 'MNOGODET_SROKI'],
	PORYADOK: ['Порядок', 'MNOGODET_PORYADOK'],
	OBJECT: ['Объект', 'MNOGODET_OBJECT'],
};
const INVALIDI = {
	SROKI: ['Сроки', 'INVALIDI_SROKI'],
	PORYADOK: ['Порядок', 'INVALIDI_PORYADOK'],
	OBJECT: ['Объект', 'INVALIDI_OBJECT'],
};
const PERESELENCI = {
	SROKI: ['Сроки', 'PERESELENCI_SROKI'],
	PORYADOK: ['Порядок', 'PERESELENCI_PORYADOK'],
	OBJECT: ['Объект', 'PERESELENCI_OBJECT'],
};
const mnogodetOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(MNOGODET, 3),
	}),
};
const invalidiOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(INVALIDI, 3),
	}),
};
const pereselenciOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: inlineKeyboardButtonsMapping(PERESELENCI, 3),
	}),
};

module.exports = {
	THIRD_DEALS_CALCULATIONS,
	thirdDealsCalculationsOpen,
	THIRD_DEALS_CALCULATIONS_BEZNAL,
	thirdDealsCalculationsBeznalOpen,
	THIRD_DEALS_SERTIFICATS,
	thirdDealsSertificatsOpen,
	HERSON,
	hersonOpen,
	SIROTA,
	sirotaOpen,
	THIRD_DEALS_SERTIFICATS_MORE,
	thirdDealsSertificatsMoreOpen,
	MILIRATY,
	militaryOpen,
	YOUNG_FAMILIES,
	youngFamiliesOpen,
	MNOGODET,
	mnogodetOpen,
	INVALIDI,
	invalidiOpen,
	PERESELENCI,
	pereselenciOpen,
};
