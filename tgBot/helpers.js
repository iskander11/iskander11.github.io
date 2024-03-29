const arrSliser = (array, size) => {
	let subarray = []; //массив в который будет выведен результат.
	for (let i = 0; i < Math.ceil(array.length / size); i++) {
		subarray[i] = array.slice(i * size, i * size + size);
	}
	return subarray;
};

const inlineKeyboardButtonsMapping = (object, rows) => {
	const arr = Object.values(object).map((someItemsArr) => {
		const [value, itemId] = someItemsArr;
		return {
			text: value,
			callback_data: itemId, // добавляем CSS-свойства для стилизации кнопки
			style: {
				color: 'primary',
			},
		};
	});
	return arrSliser(arr, rows);
};
const getRandomAdvice = () => {
	const advices = [
		`Никогда не грубите и вежливо отвечайте на все вопросы клиентов

	Всегда надо помнить, что любой звонящий может стать вашим потенциальным клиентом. Никогда не грубите и вежливо отвечайте на все вопросы. Например, клиент спрашивает «а в квартире ремонт есть?». Подавляющее большинство риелторов скорее всего ответит что-то в духе: «Нет, ремонта нет, а что вы хотели за такую цену?». Никогда так не отвечайте. Это огромный минус, так как этот клиент больше никогда не позвонит. Альтернативным и положительным для вас ответом будет: «Данная квартира без ремонта, но мы подыщем вам более подходящий вариант».`,
		`Никогда не путайте своих клиентов

	К каждому клиенту надо найти персональный подход и четко выяснить его пожелания. Если вам звонит клиент с которым вы заранее договорились посмотреть определенную квартиру, а вы в силу своей занятости или еще чего-то не узнали клиента или не можете вспомнить что за квартира или еще хуже ни о чем не договорились с хозяином квартиры, то знайте вы потеряли этого клиента.`,
		`Подходите ответственно и профессионально к своим рабочим обязанностям

	Т.е. подробно и четко узнавайте детали каждой квартиры, посещайте их перед выставлением рекламы или до предложения ее клиенту. Никому не будет приятно, если заранее с вами договорившись о посещении квартиры, клиент придя в назначенное время ждет вас и плюс приехав вы не можете назвать конкретный адрес и четко показать саму квартиру в силу незнания адреса или других деталей.`,
		`При размещении рекламы пишите подробную информацию

	Многие риелторы в рекламах указывают только район, этаж и состояние квартиры и не указывают цену, что можно расценить как ошибку. Либо выставляют фальшивые фото квартир. Это тоже не прибавляет вам профессионального «веса». Поверьте, клиент с удовольствием выберет следующего риелтора, указавший более точную информацию.`,
		`Вменяемое описание состояние квартиры

	Отдельным пунктом хотелось бы выделить то, как вы указываете состояние квартиры. В нашем понимании существует два понятия: либо с ремонтом, либо без ремонта. Без всяких вариаций на тему: чистая, убогая, советская, люкс, евро люкс или что-то еще. У каждого свое понимание «люкса» и «убогости». Конечно, есть такой вариант, когда ремонт в квартире был давно, но на данный момент дополнительных вложений не требуется, либо просто можно освежить.`,
		`Будьте максимально прозрачными и понятными

	При знакомстве с новым клиентом, будьте максимально открытыми, предложите сразу свою визитку, расскажите про свое агентство, про свой опыт работы, а также про стоимость ваших услуг и подробно про весь процесс оформления документов. Говорите приятно, четко и медленно. Такое поведение сразу прибавит вам плюсы в вашу копилку. Такой подход нужен, как и к продавцам квартир, так и к покупателям. Старайтесь доступно объяснять все нюансы.`,
		`Обращайтесь с клиентами так, как хотели бы, чтобы обращались с вами

	Так мы плавно перешли к золотому правилу, которое можно сформулировать следующим образом: «Обращайтесь с клиентами так, как хотели бы, чтобы обращались с вами». Чтобы создать достойную репутацию профессионального риелтора, показывайте свое уважением к клиентам, а также будьте честны и доброжелательны. Всегда помните, что ценен каждый клиент, так как он может и поспособствовать вашей карьере, так и разрушить. Обращайтесь с ними должным образом, и тогда каждый клиент станет для вас лучшим. `,
		`Клиент всегда прав!

	Это основное правило для всех работником, имеющих дела с клиентами. Очень важно выслушать все предпочтения клиента. Если клиент целенаправленно заинтересован в 3хкомнатной квартире в определенном районе за определенную сумму, надо искать варианты, удовлетворяющие его запросам. Никогда не оценивайте запросы клиента и не реагируйте негативно в духе: «Это абсурд.» или «За сумму на которую вы рассчитываете, вы ничего подобного не найдете.». Лучше выясните у клиента всевозможные варианты предпочтения и предлагайте подходящие варианты по возможности.`,
		`Не забывайте, что последнее слово за клиентом

	Не торопите со сделкой и не пытайтесь манипулировать поведением клиента. Каждый клиент перед важной покупкой должен взвесить все «за» и «против» и на это ему требуется определенное время. Клиент сам знает, что лучше и выгодно именно для него. Не тратьте слова в пустую, дайте клиенту решить самому. Никогда  не решайте за клиента.`,
		`Важно искать новых покупателей

	Другой момент, на который хотелось бы обратить ваше внимание – это поиск будущих потенциальных клиентов.  Конечно, выглядит довольно просто, но слишком часто добившиеся определённого уровня успеха риэлторы забывают о том, насколько важно искать новых покупателей. Нужно постоянно искать новых покупателей. Даже если сегодня у вас большой поток клиентов, он может иссякнуть в любой момент. Также это позволит вам поддерживать свой бизнес «на волне» не только сегодня и завтра, но и через десять или пятнадцать лет.`,
		`Рекламируйте и продвигайте себя как бренд

	Неотъемлемой частью успешного бизнеса является самореклама. Продвигайте не только объекты недвижимости, но и себя как бренд. Обзаведитесь визитными карточками, выставляйте рекламы в интернете, используйте рассылку на электронную почту, и не забывайте про социальные сети и мессенджеры. Сарафанное радио вам в помощь, т.е. ищите тех, кто сможет вас рекомендовать. Самый лучший способ – это хорошо выполнять свою работу и клиенты потянуться сами.`,
		`Конкурируйте сами с собой

	Любите свое дело, вкладывайтесь в новые знания, читайте больше и о своей профессии, и о психологии, книги и статьи о работе с клиентами. Меняйтесь, самосовершенствуйтесь, культивируйте себя как личность и профессионал, цените себя. Чтобы стать успешным, каждый день становитесь лучше, чем вчера.`,
	];
	const random = Math.floor(Math.random() * advices.length);
	return advices[random];
};

module.exports = { inlineKeyboardButtonsMapping, getRandomAdvice };
