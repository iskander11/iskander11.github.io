const menuOpen = {
	reply_markup: JSON.stringify({
		inline_keyboard: [[{ text: 'Открыть меню', callback_data: 'MENU_OPEN' }]],
	}),
};
module.exports = { menuOpen };
