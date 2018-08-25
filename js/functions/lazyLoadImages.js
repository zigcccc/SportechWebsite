import Blazy from 'blazy';
const LazyLoadImages = () => {
	new Blazy({
		successClass: 'loaded',
		offset: 100
	});
};

export default LazyLoadImages;
