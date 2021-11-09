const navMenu = document.querySelector('.navbar').children;
const navUl = navMenu[0];

//навешивание активного класса для ссылки
let selectedLink = document.querySelector('navbar__link_active');
navUl.addEventListener('click', (event) => {
	let target = event.target;
	toActive(target);
	if(target != 'li' || target != 'a') return;

})


function toActive(elem) {
	if(selectedLink) {
		selectedLink.classList.remove('navbar__link_active');
	}
	selectedLink = elem;
	selectedLink.classList.add("navbar__link_active");
}



//адаптивное меню
const menuBtn = document.querySelector('.navbar-burger');
const navbar = document.querySelector('.navbar');
menuBtn.addEventListener('click', (event) => {
	console.log('click');
	navbar.classList.toggle('navbar_visible');
}) 
 const myFotorama = document.querySelector('#fotorama');

createElement()
for(let i = 3; i <= 8; i++){
    createElement(i);
}
//создание новых элементов-картинок для слайдера
function createElement(path) {
    let newImage = document.createElement('img');
    newImage.src = `img/${path}.png`;
    console.log(newImage);
    newImage.alt = 'foto';

    myFotorama.appendChild(newImage);
}
   

    // 1. Initialize fotorama manually.
    var $fotoramaDiv = $('#fotorama').fotorama();

    // 2. Get the API object.
    var fotorama = $fotoramaDiv.data('fotorama');

    // 3. Inspect it in console.
    console.log(fotorama);

