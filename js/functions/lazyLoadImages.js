import Blazy from 'blazy';
const LazyLoadImages = () => {
	new Blazy({
		successClass: 'loaded',
		offset: 20
	});
};

export default LazyLoadImages;
