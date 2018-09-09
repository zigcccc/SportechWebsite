const HandlePopup = () => {
	// Trigger popup
	const popupTriggers = document.querySelectorAll('.popup-trigger');
	popupTriggers.forEach(trigger => {
		const query = trigger.dataset.toggle;
		const popup = document.querySelector(`#${query}`);
		trigger.addEventListener('click', e => {
			e.preventDefault();
			popup.classList.add('active');
		});
		// Close popup
		popup.querySelectorAll('.close-popup').forEach(btn => {
			btn.addEventListener('click', e => {
				e.preventDefault();
				popup.classList.remove('active');
			});
		});
	});
};

export default HandlePopup;
