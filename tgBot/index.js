const { menuOpen } = require('./menus/menu-open.js'); //Главное меню - Открыть меню
const { mainCommandsOpen, MAIN_MENU } = require('./menus/main-menu.js'); //Ипотека,Маткапитал,Сделки,Риэлтор,Налог,Помощь
const {
	ipotekaCommandsOpen,
	ipotekaVidOpen,
	IPOTEKA,
	IPOTEKA_VID,
} = require('./menus/ipoteka.js');
const {
	DEALS,
	dealsMenuOpen,
	DEALS_FORM,
	dealsFormOpen,
	DEALS_FORM_PPF,
	dealsFormPPFOpen,
	DEALS_FORM_PPF_LOGIN,
	dealsFormPPFLoginOpen,
	dealsDocumentsOpen,
	DEALS_FORM_NOTARIAL,
	dealsFormNotarialOpen,
	DEALS_FORM_NOTARIAL_EXPENCES,
	dealsFormNotarialExpencesOpen,
	DEALS_DOCUMENTS,
} = require('./menus/sdelki.js');
const {
	SECOND_DEALS_REGLAMENT,
	secondDealsReglamentOpen,
	SECOND_DEALS_CONTRACTS,
	secondDealsContractsOpen,
} = require('./menus/secondDeals.js');
const {
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
} = require('./menus/thirdDeals.js');
const { MATKAPITAL, matkapitalCommandsOpen } = require('./menus/matcapital.js');
const { QUESTIONS } = require('./help/questions.js');

const {
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
} = require('./menus/rieltor.js');
const {
	NALOG,
	nalogOpen,
	NALOG_PRAVILA,
	nalogPravilaOpen,
} = require('./menus/nalog.js');
const { HELP, helpOpen } = require('./menus/help.js');
const telegramApi = require('node-telegram-bot-api');
const { getRandomAdvice } = require('./helpers.js');

const token = '6198268825:AAEZP0QbdkvSbYBjrXXWxfBN2ueo3ULXxWM';

const bot = new telegramApi(token, { polling: true });

const start = () => {
	bot.setMyCommands([
		{ command: '/start', description: 'Начальное приветствие!' },
		{ command: '/menu', description: 'Открыть меню!' },
	]);
	bot.on('message', async (msg) => {
		const text = msg.text;
		const chatId = msg.chat.id;

		if (text === '/start') {
			await bot.sendSticker(chatId, 'images/gagarin.webp');
			await bot.sendMessage(
				chatId,
				`Добро пожаловать в Telegram бот СН "Эксклюзив"`,
				menuOpen,
			);
		}
		if (text === '/menu') {
			await bot.sendMessage(chatId, `Меню`, mainCommandsOpen);
		}
	});
	bot.on('callback_query', (msg) => {
		const data = msg.data;
		const chatId = msg.message.chat.id;

		switch (data) {
			case 'MENU_OPEN': {
				return bot.sendMessage(chatId, 'Меню', mainCommandsOpen);
			}
			case MAIN_MENU.IPOTEKA[1]: {
				return bot.sendMessage(chatId, 'Ипотека', ipotekaCommandsOpen);
			}
			case IPOTEKA.VID[1]: {
				return bot.sendMessage(chatId, 'Вид', ipotekaVidOpen);
			}
			case IPOTEKA_VID.CIVIL[1]: {
				return bot.sendDocument(chatId, 'ipoteka/grajdanskaya.docx');
			}
			case IPOTEKA_VID.MILITARY[1]: {
				return bot.sendDocument(chatId, 'ipoteka/voennaya.docx');
			}

			case IPOTEKA.PROGRAMS[1]: {
				return bot.sendDocument(chatId, 'ipoteka/programmi.docx');
			}
			case IPOTEKA.REQUREMENTS_BORROWER[1]: {
				return bot.sendDocument(chatId, 'ipoteka/trebovaniya-k-zaem.docx');
			}
			case IPOTEKA.STAVKI[1]: {
				return bot.sendDocument(chatId, 'ipoteka/stavki.docx');
			}
			case MAIN_MENU.MATKAPITAL[1]: {
				return bot.sendMessage(chatId, 'Маткапитал', matkapitalCommandsOpen);
			}
			case MATKAPITAL.IMPORTANT[1]: {
				return bot.sendDocument(chatId, 'matkapital/vajno.docx');
			}
			case MATKAPITAL.OBJECTS[1]: {
				return bot.sendDocument(chatId, 'matkapital/objects.docx');
			}
			case MATKAPITAL.SIZE[1]: {
				return bot.sendDocument(chatId, 'matkapital/size.docx');
			}
			case MATKAPITAL.SROKI[1]: {
				return bot.sendDocument(chatId, 'matkapital/sroki.docx');
			}
			case MAIN_MENU.SDELKI[1]: {
				return bot.sendMessage(chatId, 'Сделки', dealsMenuOpen);
			}
			case DEALS.FORM[1]: {
				return bot.sendMessage(chatId, 'Форма', dealsFormOpen);
			}
			case DEALS_FORM.PPF[1]: {
				return bot.sendMessage(
					chatId,
					'Простая письменная форма',
					dealsFormPPFOpen,
				);
			}
			case DEALS_FORM_PPF.LOGIN[1]: {
				return bot.sendMessage(chatId, 'Регистрация', dealsFormPPFLoginOpen);
			}
			case DEALS.DOCUMENTS[1]: {
				return bot.sendMessage(chatId, 'Документы', dealsDocumentsOpen);
			}
			case DEALS_FORM.NOTARIAL[1]: {
				return bot.sendMessage(
					chatId,
					'Нотариальная форма',
					dealsFormNotarialOpen,
				);
			}
			case DEALS_FORM_NOTARIAL.EXPENCES[1]: {
				return bot.sendMessage(
					chatId,
					'Расходы',
					dealsFormNotarialExpencesOpen,
				);
			}
			case DEALS.REGLAMENT[1]: {
				return bot.sendMessage(
					chatId,
					'Регламент сделки',
					secondDealsReglamentOpen,
				);
			}
			case DEALS.CONTRACTS[1]: {
				return bot.sendMessage(chatId, 'Договора', secondDealsContractsOpen);
			}
			case DEALS.CALCULATIONS[1]: {
				return bot.sendMessage(chatId, 'Расчёты', thirdDealsCalculationsOpen);
			}
			case THIRD_DEALS_CALCULATIONS.BEZNAL[1]: {
				return bot.sendMessage(
					chatId,
					'Безналичный',
					thirdDealsCalculationsBeznalOpen,
				);
			}
			case THIRD_DEALS_CALCULATIONS.SERTIFICATS[1]: {
				return bot.sendDocument(
					chatId,
					'sdelki/rascheti/sertificats/sertificats.docx',
				);
			}
			case THIRD_DEALS_SERTIFICATS.HERSON[1]: {
				return bot.sendMessage(chatId, 'Херсон', hersonOpen);
			}
			case THIRD_DEALS_SERTIFICATS.SIROTA[1]: {
				return bot.sendMessage(chatId, 'Херсон', sirotaOpen);
			}
			case THIRD_DEALS_SERTIFICATS.MORE[1]: {
				return bot.sendMessage(chatId, 'Иные', thirdDealsSertificatsMoreOpen);
			}
			case THIRD_DEALS_SERTIFICATS_MORE.MILIRATY[1]: {
				return bot.sendMessage(chatId, 'Военные', militaryOpen);
			}
			case THIRD_DEALS_SERTIFICATS_MORE.MNOGODET[1]: {
				return bot.sendMessage(chatId, 'Многодетные семьи', mnogodetOpen);
			}
			case THIRD_DEALS_SERTIFICATS_MORE.YOUNG_FAMILIES[1]: {
				return bot.sendMessage(chatId, 'Молодые', youngFamiliesOpen);
			}
			case THIRD_DEALS_SERTIFICATS_MORE.INVALIDI[1]: {
				return bot.sendMessage(chatId, 'Инвалиды', invalidiOpen);
			}
			case THIRD_DEALS_SERTIFICATS_MORE.PERESELENCI[1]: {
				return bot.sendMessage(chatId, 'Переселенцы', pereselenciOpen);
			}
			case MAIN_MENU.RIELTOR[1]: {
				return bot.sendMessage(chatId, 'Риэлтор', rieltorOpen);
			}
			case RIELTOR.STAGER[1]: {
				return bot.sendMessage(chatId, 'Cтажер', rieltorStagerOpen);
			}
			case RIELTOR_STAGER.BUYER[1]: {
				return bot.sendMessage(chatId, 'Покупатель', rieltorStagerBuyerOpen);
			}
			case RIELTOR_STAGER.SELLER[1]: {
				return bot.sendMessage(chatId, 'Продавец', rieltorStagerSellerOpen);
			}
			case RIELTOR_STAGER.QUESTIONS[1]: {
				return bot.sendMessage(chatId, 'Вопросы', rieltorStagerQuestionOpen);
			}
			case RIELTOR.AGENT[1]: {
				return bot.sendMessage(chatId, 'Агент', rieltorAgentOpen);
			}
			case RIELTOR_AGENT.SELLER[1]: {
				return bot.sendMessage(chatId, 'Продавец', rieltorAgentSellerOpen);
			}
			case RIELTOR_AGENT.BUYER[1]: {
				return bot.sendMessage(chatId, 'Покупатель', rieltorAgentBuyerOpen);
			}
			case RIELTOR_AGENT.REGLAMENT[1]: {
				return bot.sendMessage(chatId, 'Регламент', rieltorAgentReglamentOpen);
			}
			case RIELTOR_AGENT_REGLAMENT.SOVMESTNIE[1]: {
				return bot.sendDocument(
					chatId,
					'rieltor/agent/reglament/sovmestnie.pdf',
				);
			}
			case RIELTOR_AGENT_REGLAMENT.PUTI_VZAIMODEISTVIYA[1]: {
				return bot.sendDocument(chatId, 'rieltor/agent/reglament/puti.pdf');
			}
			case RIELTOR_AGENT_REGLAMENT.KOMISSII[1]: {
				return bot.sendDocument(
					chatId,
					'rieltor/agent/reglament/komissii.docx',
				);
			}
			case RIELTOR_AGENT_REGLAMENT.PRAVILA_SN[1]: {
				return bot.sendMessage(
					chatId,
					` 1.	Отсутствие слова «НЕТ»
					2.	Честность в работе
					3.	Командная работа
					4.	Социальная вовлечённость
					5.	Ценность каждого клиента и индивидуальный подход
					6.	Забота о каждом
					7.	Саморазвитие, обучение и рост
					8.	Современные технологии продаж
					9.	Лояльная стоимость услуг
					10.	Отсутствие скрытых комиссий
					`,
				);
			}
			case MAIN_MENU.NALOG[1]: {
				return bot.sendMessage(chatId, 'Налог(НДФЛ)', nalogOpen);
			}
			case NALOG.PRAVILA_NACHISLENIYA[1]: {
				return bot.sendMessage(chatId, 'Правила начисления', nalogPravilaOpen);
			}
			case MAIN_MENU.HELP[1]: {
				return bot.sendMessage(chatId, 'Помощь', helpOpen);
			}
			case HELP.QUESTION[1]: {
				return bot.sendMessage(chatId, 'Напиши,менеджер ответит');
			}
			case SECOND_DEALS_REGLAMENT.REGLAMENT[1]: {
				return bot.sendDocument(
					chatId,
					'sdelki/deals-reglament/reglament-deals.docx',
				);
			}
			case SECOND_DEALS_REGLAMENT.MAP_CONTRACT[1]: {
				return bot.sendMessage(chatId, 'ТЕСТ');
			}
			case SECOND_DEALS_CONTRACTS.AVANS[1]: {
				return bot.sendDocument(chatId, 'sdelki/dogovora/avans.docx');
			}
			case SECOND_DEALS_CONTRACTS.BRON[1]: {
				return bot.sendDocument(chatId, 'sdelki/dogovora/bron.docx');
			}
			case SECOND_DEALS_CONTRACTS.PREDV_DOG[1]: {
				return bot.sendDocument(
					chatId,
					'sdelki/dogovora/predvaritelnii-DKP.docx',
				);
			}
			case SECOND_DEALS_CONTRACTS.ZADATOK[1]: {
				return bot.sendDocument(chatId, 'sdelki/dogovora/zadatok.docx');
			}
			case SECOND_DEALS_CONTRACTS.OBESPECH[1]: {
				return bot.sendDocument(
					chatId,
					'sdelki/dogovora/obespechitilnii-platej.docx',
				);
			}
			case DEALS_FORM_PPF.EXPENCES[1]: {
				return bot.sendDocument(chatId, 'sdelki/form/PPF/rashodi.docx');
			}
			case DEALS_FORM_PPF_LOGIN.MAIL[1]: {
				return bot.sendDocument(
					chatId,
					'sdelki/form/PPF/registr/electron.docx',
				);
			}
			case DEALS_FORM_PPF_LOGIN.MFC[1]: {
				return bot.sendDocument(chatId, 'sdelki/form/PPF/registr/mfc.docx');
			}
			case DEALS_FORM_PPF.MINUS[1]: {
				return bot.sendDocument(chatId, 'sdelki/form/PPF/ppf-minus.docx');
			}
			case DEALS_FORM_PPF.PLUS[1]: {
				return bot.sendDocument(chatId, 'sdelki/form/PPF/ppf-plus.docx');
			}
			case DEALS_FORM_NOTARIAL_EXPENCES.IMPORTANT_FORM[1]: {
				return bot.sendDocument(chatId, 'sdelki/form/notarial/rashodi.docx');
			}
			case DEALS_FORM_NOTARIAL.LOGIN[1]: {
				return bot.sendDocument(chatId, 'sdelki/form/notarial/registr.docx');
			}
			case DEALS_FORM_NOTARIAL.MINUS[1]: {
				return bot.sendDocument(chatId, 'sdelki/form/notarial/minus.docx');
			}
			case DEALS_FORM_NOTARIAL.PLUS[1]: {
				return bot.sendDocument(chatId, 'sdelki/form/notarial/plus.docx');
			}
			case THIRD_DEALS_CALCULATIONS.NAL[1]: {
				return bot.sendDocument(chatId, 'sdelki/rascheti/nal/nal.docx');
			}
			case THIRD_DEALS_CALCULATIONS_BEZNAL.CHECKING_ACCOUNT[1]: {
				return bot.sendDocument(
					chatId,
					'sdelki/rascheti/beznal/raschetnii-schet.docx',
				);
			}
			case THIRD_DEALS_CALCULATIONS_BEZNAL.ENSKROU[1]: {
				return bot.sendDocument(
					chatId,
					'sdelki/rascheti/beznal/eskrou-schet.docx',
				);
			}
			case THIRD_DEALS_CALCULATIONS_BEZNAL.NOTARIAL_DEPOSIT[1]: {
				return bot.sendDocument(
					chatId,
					'sdelki/rascheti/beznal/notarial-deposit.docx',
				);
			}
			case THIRD_DEALS_CALCULATIONS.SERTIFICATS[1]: {
			}
			// case DEALS_DOCUMENTS.BUYER[1]: {
			// 	return bot.sendDocument(chatId, 'sdelki/documents/buyer.docx');
			// }
			// case DEALS_DOCUMENTS.SELLER[1]: {
			// 	return bot.sendDocument(chatId, 'sdelki/documents/seller.docx');
			// }

			case RIELTOR_STAGER_SELLER.DOGOVOR[1]: {
				return bot.sendDocument(chatId, 'rieltor/stager/seller/dogovor.docx');
			}
			case RIELTOR_STAGER_SELLER.SOGLASHENIE[1]: {
				return bot.sendDocument(
					chatId,
					'rieltor/stager/seller/soglashenie.docx',
				);
			}
			case RIELTOR_STAGER_SELLER.VOZRAZHENIYA[1]: {
				return bot.sendDocument(
					chatId,
					'rieltor/stager/seller/vozrajeniya.docx',
				);
			}
			case RIELTOR_STAGER_SELLER.SCRIPT[1]: {
				return bot.sendPhoto(chatId, 'rieltor/stager/seller/script-seller.jpg');
			}
			case RIELTOR_STAGER_SELLER.CHEK_LIST[1]: {
				return bot.sendDocument(
					chatId,
					'rieltor/stager/seller/check-list.docx',
				);
			}
			case RIELTOR_STAGER_SELLER.KRUCKI[1]: {
				return bot.sendDocument(chatId, 'rieltor/stager/seller/kruchki.docx');
			}
			case RIELTOR_STAGER_SELLER.LIST_OBZVONA[1]: {
				return bot.sendDocument(
					chatId,
					'rieltor/stager/seller/call-table.docx',
				);
			}
			case RIELTOR_STAGER_SELLER.TETRAD_KONTAKTOV[1]: {
				return bot.sendDocument(
					chatId,
					'rieltor/stager/seller/contacts-note.docx',
				);
			}
			case RIELTOR_STAGER_SELLER.TEH_ZADANIE[1]: {
				return bot.sendDocument(
					chatId,
					'rieltor/stager/seller/teh-harakteristika.docx',
				);
			}
			case RIELTOR_STAGER_BUYER.DOGOVOR[1]: {
				return bot.sendDocument(chatId, 'rieltor/stager/buyer/dogovor.docx');
			}
			case RIELTOR_STAGER_BUYER.VOZRAZHENIYA[1]: {
				return bot.sendDocument(chatId, 'rieltor/stager/buyer/vozrajeniya.pdf');
			}
			case RIELTOR_STAGER_BUYER.SCRIPT[1]: {
				return bot.sendDocument(
					chatId,
					'rieltor/stager/buyer/buyer-script.jpg',
				);
			}
			case RIELTOR_STAGER_BUYER.CHEK_LIST[1]: {
				return bot.sendDocument(chatId, 'rieltor/stager/buyer/check-list.docx');
			}
			case RIELTOR_STAGER_BUYER.TEH_HARAKTERISTIKI[1]: {
				return bot.sendDocument(
					chatId,
					'rieltor/stager/buyer/teh-harakteristiki.docx',
				);
			}
			case RIELTOR_STAGER_QUESTIONS.OFTEN[1]: {
				return bot.sendMessage(chatId, QUESTIONS);
			}
			case RIELTOR_STAGER_QUESTIONS.RULES[1]: {
				return bot.sendDocument(chatId, 'rieltor/stager/questions/rules.docx');
			}
			case RIELTOR_AGENT_SELLER.DOGOVOR[1]: {
				return bot.sendDocument(chatId, 'rieltor/agent/seller/dogovor.docx');
			}
			case RIELTOR_AGENT_SELLER.SOGLASHENIE[1]: {
				return bot.sendDocument(
					chatId,
					'rieltor/agent/seller/soglashenie.docx',
				);
			}
			case RIELTOR_AGENT_SELLER.SCRIPT[1]: {
				return bot.sendPhoto(chatId, 'rieltor/agent/seller/seller-script.jpg');
			}
			case RIELTOR_AGENT_SELLER.TEH_HARAKTERISTIKI[1]: {
				return bot.sendDocument(
					chatId,
					'rieltor/agent/seller/teh-harakteristiki.docx',
				);
			}
			case RIELTOR_AGENT_SELLER.CHEK_LIST[1]: {
				return bot.sendDocument(chatId, 'rieltor/agent/seller/check-list.docx');
			}
			case RIELTOR_AGENT_SELLER.OTCHET[1]: {
				return bot.sendDocument(chatId, 'rieltor/agent/seller/otchet.docx');
			}
			case RIELTOR_AGENT_SELLER.ANALITIKA[1]: {
				return bot.sendDocument(chatId, 'rieltor/agent/seller/analitika.docx');
			}
			case RIELTOR_AGENT_SELLER.STAT[1]: {
				return bot.sendMessage(chatId, 'TЕСТ');
			}
			case RIELTOR_AGENT_SELLER.LIST_OBR_SVYAZI[1]: {
				return bot.sendDocument(chatId, 'rieltor/agent/seller/list_obr.docx');
			}
			case RIELTOR_AGENT_BUYER.DOGOVOR[1]: {
				return bot.sendDocument(chatId, 'rieltor/agent/buyer/dogovor.docx');
			}
			case RIELTOR_AGENT_BUYER.SCRIPT[1]: {
				return bot.sendPhoto(chatId, 'rieltor/agent/buyer/script-buyer.jpg');
			}
			case RIELTOR_AGENT_BUYER.KRUCKI[1]: {
				return bot.sendDocument(chatId, 'rieltor/agent/buyer/krucki.docx');
			}
			case RIELTOR_AGENT_BUYER.TEH_HARAKTERISTIKI[1]: {
				return bot.sendDocument(
					chatId,
					'rieltor/agent/buyer/teh-harakteristika.docx',
				);
			}
			case RIELTOR_AGENT_BUYER.CHEK_LIST[1]: {
				return bot.sendDocument(chatId, 'rieltor/agent/buyer/check-list.docx');
			}
			case RIELTOR_AGENT_BUYER.OFERTA[1]: {
				return bot.sendDocument(chatId, 'rieltor/agent/buyer/oferta.docx');
			}
			case RIELTOR_AGENT_BUYER.PROSMOTROVOI_LIST[1]: {
				return bot.sendDocument(
					chatId,
					'rieltor/agent/buyer/prosmotrovoi.docx',
				);
			}
			case RIELTOR_AGENT_REGLAMENT.SOVMESTNIE[1]: {
				return bot.sendMessage(chatId, 'тест');
			}
			case RIELTOR_AGENT_REGLAMENT.KOMISSII[1]: {
				return bot.sendMessage(chatId, 'тест');
			}
			case RIELTOR_AGENT_REGLAMENT.PRAVILA_SN[1]: {
				return bot.sendMessage(chatId, 'тест');
			}
			case RIELTOR_AGENT_REGLAMENT.PUTI_VZAIMODEISTVIYA[1]: {
				return bot.sendMessage(chatId, 'тест');
			}
			case NALOG.BAZA[1]: {
				return bot.sendDocument(chatId, 'nalog/baza/baza.docx');
			}
			case NALOG.VICETI[1]: {
				return bot.sendDocument(chatId, 'nalog/vicheti/vicheti.docx');
			}
			case NALOG_PRAVILA.DARENIE[1]: {
				return bot.sendMessage(
					chatId,
					`Если в собственности более 3х лет налог не платится, если дарение от членов семьи. 13%`,
				);
			}
			case NALOG_PRAVILA.DOLEVOE_UCHASTIE[1]: {
				return bot.sendMessage(
					chatId,
					`Если в собственности более 5 лет налог не платится. 13%`,
				);
			}
			case NALOG_PRAVILA.KUPLYA_PRODAZHA[1]: {
				return bot.sendMessage(
					chatId,
					`Если в собственности более 5 лет налог не платится. 13%`,
				);
			}
			case NALOG_PRAVILA.NASLEDSTVO[1]: {
				return bot.sendMessage(
					chatId,
					`Если в собственности более 3х лет налог не платится. 13%`,
				);
			}
			case NALOG_PRAVILA.PRIVATIZACIYA[1]: {
				return bot.sendMessage(
					chatId,
					`Если в собственности более 3х лет налог не платится. 13%`,
				);
			}

			case HELP.SOVETI_GURU[1]: {
				return bot.sendMessage(chatId, getRandomAdvice());
			}
			case HELP.QUESTION[1]: {
				return bot.sendMessage(chatId, QUESTIONS);
			}
		}
	});
};

start();
