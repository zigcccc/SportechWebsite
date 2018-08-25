import { HeroParallax, ScrollAnchors } from './functions';

document.addEventListener('DOMContentLoaded', () => {
	const anchors = document.querySelectorAll('a.scrollable');
	ScrollAnchors(anchors);
	HeroParallax();
});
