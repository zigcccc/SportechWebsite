const HeroParallax = () => {
	const trianglesLeft = document.querySelector('.hero-triangles-left');
	const trianglesRight = document.querySelector('.hero-triangles-right');
	window.addEventListener('scroll', e => {
		let offset = e.target.scrollingElement.scrollTop;
		if (offset < 815) {
			trianglesLeft.style.transform = `translateY(-${Math.floor(
				offset / 6
			)}px)`;
			trianglesRight.style.transform = `translateY(-${Math.floor(
				offset / 3
			)}px)`;
		}
	});
};

export default HeroParallax;
