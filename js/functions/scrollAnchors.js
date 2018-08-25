const ScrollAnchors = anchors => {
	anchors.forEach(anchor => {
		const targetQuery = new URL(anchor.href).hash;
		const target = document.querySelector(targetQuery);
		const dataLayer = window.dataLayer || [];
		anchor.addEventListener('click', e => {
			e.preventDefault();
			if (target) {
				const targetOffsetTop = target.offsetTop;
				window.scrollTo({
					top: targetOffsetTop,
					behavior: 'smooth'
				});
				dataLayer.push({
					event: 'PageAnchorClicked',
					target: targetQuery
				});
			}
		});
	});
};

export default ScrollAnchors;
