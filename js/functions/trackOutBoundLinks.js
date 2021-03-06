const TrackOutBoundLinks = anchors => {
	anchors.forEach(anchor => {
		if (anchor.classList.contains('ga-outbound-link')) {
			anchor.addEventListener('click', () => {
				const dataLayer = window.dataLayer || [];
				dataLayer.push({
					event: 'OutboundLinkClick',
					url: anchor.href
				});
			});
		}
	});
};

export default TrackOutBoundLinks;
