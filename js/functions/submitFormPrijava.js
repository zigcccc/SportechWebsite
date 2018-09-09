import axios from 'axios';
import * as qs from 'query-string';

const createCloseButton = container => {
	const elem = document.createElement('div');
	const icon = document.createElement('i');
	icon.classList = 'fas fa-times';
	elem.appendChild(icon);
	elem.classList.add('dissmiss-message-btn');
	elem.addEventListener('click', () => {
		container.classList.remove('active');
	});
	return elem;
};

const SubmitFormPrijava = () => {
	const form = document.getElementById('frm-prijava');
	const formFields = document.querySelectorAll('.column.field input');
	const submitContainer = document.getElementById('submit-container');
	const formMessageContainer = document.getElementById(
		'form-message-container'
	);
	const formMessage = document.getElementById('form-message');
	const formLoadingIndicator = document.querySelector(
		'#submit-frm-prijava + span'
	);
	form.addEventListener('submit', e => {
		e.preventDefault();
		formLoadingIndicator.classList.add('active');
		let data = {};
		formFields.forEach(field => {
			data[field.name] = field.value;
		});
		//const url = 'http://localhost:8000/';
		const url = 'https://sportech.si/server/';
		axios
			.post(url, qs.stringify(data))
			.then(res => {
				console.log(res);
				formLoadingIndicator.classList.remove('active');
				if (res.data.status >= 200 && res.data.status < 300) {
					submitContainer.classList.add('hidden');
					if (formMessageContainer.querySelector('.dissmiss-message-btn')) {
						formMessageContainer
							.querySelector('.dissmiss-message-btn')
							.remove();
					}
					formMessage.innerText = res.data.message;
					formMessageContainer.classList.remove('error');
					formMessageContainer.classList.add('active');
					formFields.forEach(field => {
						field.value = '';
					});
					let dataLayer = window.dataLayer || [];
					dataLayer.push({ event: 'Apply Form Submitted' });
				} else {
					formMessage.innerText = res.data.message;
					formMessageContainer.classList.add('active', 'error');
					formMessageContainer.appendChild(
						createCloseButton(formMessageContainer)
					);
				}
			})
			.catch(err => {
				console.log(err);
				formLoadingIndicator.classList.remove('active');
				formMessage.innerText =
					'Nekaj je šlo narobe. Poizkusite ponovno ali pa kontaktirajte našo ekipo.';
				formMessageContainer.classList.add('active', 'error');
				formMessageContainer.appendChild(
					createCloseButton(formMessageContainer)
				);
			});
	});
};

export default SubmitFormPrijava;
