const ScrollAnchors = anchors => {
	anchors.forEach(anchor => {
		const targetQuery = new URL(anchor.href).hash;
		const target = document.querySelector(targetQuery);
		anchor.addEventListener('click', e => {
			e.preventDefault();
			if (target) {
				const targetOffsetTop = target.offsetTop;
				window.scrollTo({
					top: targetOffsetTop,
					behavior: 'smooth'
				});
			}
		});
	});
};

export default ScrollAnchors;
