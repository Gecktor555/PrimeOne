
const headerTopLang = document.querySelector(".header-top-lang");
//const headerTopLangNew = document.querySelector(".header-top-lang__new");
const buttons = document.querySelectorAll('a');
const textTitle = document.querySelector(".toplink");
const textDesc0 = document.querySelector(".btnlink0");
const textDesc1 = document.querySelector(".btnlink1");
const textDesc2 = document.querySelector(".btnlink2");
const textDesc3 = document.querySelector(".btnlink3");
const textDesc4 = document.querySelector(".btnlink4");
const textDesc5 = document.querySelector(".btnlink5");

buttons.forEach(button => {
	button.addEventListener('click', () => {
		headerTopLang.querySelector('.active').classList.remove('active');
		//headerTopLangNew.querySelector('.active').classList.remove('active');
		button.classList.add('active');

		const attr = button.getAttribute('language');

		textTitle.textContent = data[attr].toplink;
		textDesc0.textContent = data[attr].btnlink0;
		textDesc1.textContent = data[attr].btnlink1;
		textDesc2.textContent = data[attr].btnlink2;
		textDesc3.textContent = data[attr].btnlink3;
		textDesc4.textContent = data[attr].btnlink4;
		textDesc5.textContent = data[attr].btnlink5;
	});
});
