const ScrollAnchors = anchors => {
	anchors.forEach(anchor => {
		const targetQuery = new URL(anchor.href).hash;
		const target = document.querySelector(targetQuery);
		const iOS =
			!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
		const dataLayer = window.dataLayer || [];
		anchor.addEventListener('click', e => {
			e.preventDefault();
			if (target) {
				const menu = document.querySelector('header .navbar-menu');
				if (menu.classList.contains('is-active')) {
					menu.classList.remove('is-active');
				}
				const targetOffsetTop = target.offsetTop;
				if (iOS) {
					window.scroll({
						top: targetOffsetTop,
						behavior: 'smooth'
					});
				} else {
					window.scrollTo({
						top: targetOffsetTop,
						behavior: 'smooth'
					});
				}
				dataLayer.push({
					event: 'PageAnchorClicked',
					target: targetQuery
				});
			}
		});
	});
};

export default ScrollAnchors;
