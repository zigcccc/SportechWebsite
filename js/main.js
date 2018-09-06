import {
	HeroParallax,
	ScrollAnchors,
	LazyLoadImages,
	TrackOutBoundLinks,
	OpenMobileMenu,
	HandleCookies,
	Counter
} from './functions';

document.addEventListener('DOMContentLoaded', () => {
	const menuBtn = document.querySelector('header .navbar-burger');
	const anchors = document.querySelectorAll('a.scrollable');
	const outboundAnchors = document.querySelectorAll('a.ga-outbound-link');
	OpenMobileMenu(menuBtn);
	ScrollAnchors(anchors);
	TrackOutBoundLinks(outboundAnchors);
	HeroParallax();
	LazyLoadImages();
	HandleCookies();
	Counter();
});
