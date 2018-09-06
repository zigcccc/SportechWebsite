import countdown from 'countdown';

const Counter = () => {
	const endDate = new Date('September 28, 2018 18:00:00');
	setInterval(() => {
		const counterCointainer = document.querySelector('#counter-container');
		const counterTitle = document.querySelector('#counter-title');
		if (!counterCointainer.classList.contains('active')) {
			counterCointainer.classList.add('active');
			counterTitle.classList.add('active');
		}
		const delta = countdown(endDate);
		const days = delta.days;
		const hours = delta.hours;
		const minutes = delta.minutes;
		const seconds = delta.seconds;
		const daysElem = document.querySelector('#days span');
		const hoursElem = document.querySelector('#hours span');
		const minutesElem = document.querySelector('#minutes span');
		const secondsElem = document.querySelector('#seconds span');
		daysElem.innerHTML = days;
		hoursElem.innerHTML = hours;
		minutesElem.innerHTML = minutes;
		secondsElem.innerHTML = seconds;
	}, 1000);
};

export default Counter;
