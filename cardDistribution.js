const usersInfo = [
	{
		name: "Mr Rashed",
		birthYear: 1999,
		currentYear: 2022,
		district: "Dhaka",
		postNo: 1200,
		priority: 2,
	},
	{
		name: "Mr Raju",
		birthYear: 1995,
		currentYear: 2022,
		district: "Rajshahi",
		postNo: 1211,
		priority: 1,
	},
];

const addToCard = (generatedCard, cardNumber, priority) => {
	if (
		parseInt(cardNumber.slice(-1), 10) % 2 === 0 ||
		parseInt(cardNumber.slice(-1), 10) === 0
	) {
		generatedCard.push({
			cardNumber,
			gift: "R",
			priority,
		});
	} else {
		generatedCard.push({
			cardNumber,
			gift: "W",
			priority,
		});
	}
};

const cardDistribution = usersInfo => {
	let generatedCard = [];
	usersInfo.forEach((user, index) => {
		const dist = user.district.slice(0, 2).toUpperCase();
		let lastTowNumberOfYear = String(user.currentYear).slice(-2);
		let firstTwoNumberOfPostal = String(user.postNo).slice(0, 2);

		const userNo = index + 1;
		const fixedNumber = dist + lastTowNumberOfYear + firstTwoNumberOfPostal;
		let cardNumber = fixedNumber + userNo;

		if (cardNumber.length === 16) {
			addToCard(generatedCard, cardNumber, user.priority);
		} else if (cardNumber.length < 16) {
			const needZero = 16 - cardNumber.length;
			let zero = "";
			for (let i = 0; i < needZero; i++) {
				zero += "0";
			}
			cardNumber = fixedNumber + zero + userNo;
			addToCard(generatedCard, cardNumber, user.priority);
		}
	});

	generatedCard = generatedCard.sort((a, b) => a.priority - b.priority);
	return generatedCard;
};

const cardsInfo = cardDistribution(usersInfo);

console.log(cardsInfo);
