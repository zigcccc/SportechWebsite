import {
	HeroParallax,
	ScrollAnchors,
	LazyLoadImages,
	TrackOutBoundLinks
} from './functions';

document.addEventListener('DOMContentLoaded', () => {
	const anchors = document.querySelectorAll('a.scrollable');
	ScrollAnchors(anchors);
	TrackOutBoundLinks(anchors);
	HeroParallax();
	LazyLoadImages();
});
