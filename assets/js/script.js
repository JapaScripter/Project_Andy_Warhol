
// if (window.location.pathname.endsWith(".html")) {
// 	window.location.href = window.location.pathname.replace(".html", "");
// 	window.history.replaceState({}, document.title, cleanPath + window.location.search + window.location.hash);
// }

window.addEventListener('load', function () {
	document.querySelector('.loading').style.opacity = 0;
	document.querySelector('.loading').style.visibility = "hidden";

	const words = document.querySelectorAll('.loading_wd');
	let currentIndex = 0;

	function showNextWord() {
		if (currentIndex > 0) {
			words[currentIndex - 1].style.opacity = 0;
		}

		words[currentIndex].style.opacity = 1;

		currentIndex++;

		if (currentIndex < words.length) {
			setTimeout(showNextWord, 2000);
		} else {
			gradualFadeOut();
		}
	}

	function gradualFadeOut() {
		setTimeout(() => {
			document.querySelector('.loading').style.transition = "opacity 2s ease-in-out";
			document.querySelector('.loading').style.opacity = 0;
			setTimeout(() => {
				document.querySelector('.loading').style.display = "none";
			}, 2000);
		}, words.length * 2000);
	}
	showNextWord();
});

function updateHeaderStyle() {
	const header = document.getElementById('hd');
	const logo = document.querySelector('.lg');
	const larguraTela = window.innerWidth;

	const isMobile = larguraTela <= 768;

	if (window.scrollY > 1) {
		header.style.height = '4vw';
		header.style.backgroundColor = 'rgba(212,40,77,0.8)';
	} else {
		header.style.height = '5vw';
		header.style.backgroundColor = 'rgba(212,40,77,1)';
	}
}

window.addEventListener('scroll', updateHeaderStyle);

window.onload = () => window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
	const menuList = document.getElementById('lsm');
	menuList.style.display = 'none';
});

function toggleMenu() {
	const menuList = document.getElementById('lsm');
	menuList.style.display = (menuList.style.display === 'none' || menuList.style.display === '') ? 'flex' : 'none';
}

function toggleMenu() {
	const menuIcon = document.getElementById('mn');
	const menuList = document.getElementById('lsm');

	if (menuIcon.src.includes('menu.svg')) {
		menuIcon.src = '/assets/images/botoes/close.svg';
		menuList.style.display = 'flex';
	} else {
		menuIcon.src = '/assets/images/botoes/menu.svg';
		menuList.style.display = 'none';
	}
}