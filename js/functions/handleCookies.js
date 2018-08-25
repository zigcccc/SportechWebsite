import * as Cookie from 'js-cookie';

const HandleCookies = () => {
	const userCookie = Cookie.get('cookie-agree');
	if (!userCookie) {
		document.querySelector('#cookie-popup').classList.add('active');
	}

	const acceptCookiesBtn = document.querySelector('#cookie-popup a');
	acceptCookiesBtn.addEventListener('click', e => {
		e.preventDefault();
		Cookie.set('cookie-agree', 'true', { expires: 365 });
		document.querySelector('#cookie-popup').classList.remove('active');
	});
};

export default HandleCookies;
