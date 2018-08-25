const OpenMobileMenu = btn => {
	btn.addEventListener('click', e => {
		e.preventDefault();
		document
			.querySelector('header nav .navbar-menu')
			.classList.toggle('is-active');
	});
};

export default OpenMobileMenu;
