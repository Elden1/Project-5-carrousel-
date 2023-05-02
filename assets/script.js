const slides = [
	{
		"id":"0", "image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"id":"1", "image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"id":"2", "image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"id":"3", "image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// variables pour le slide et bannière
let i = 0;
let a = 0;
let b = 0;
const banner = document.querySelector('#banner');

// Générer l'image et le text de la bannière

let slideId = document.querySelector("#banner > img").innerHTML = slides[i].id;
let imageElement = document.querySelector("#banner > img").src = `.\\assets\\images\\slideshow\\${slides[i].image}`;
let tagLine = document.querySelector("#banner > p").innerHTML = slides[i].tagLine;

// Sélectionner et afficher l'image suivante de la bannière
document.getElementById("arrow_right").addEventListener("click", nextSlide);

function nextSlide () {
	++i;
	++b;
	if (i === 4) {
		i = 0;
	}
	if (b === 4) {
		b = 0;
	}
	slideId = document.querySelector("#banner > img").innerHTML = slides[i].id;
	imageElement = document.querySelector("#banner > img").src = `.\\assets\\images\\slideshow\\${slides[i].image}`;
	tagLine = document.querySelector("#banner > p").innerHTML = slides[i].tagLine;
};
		
// Sélectionner et afficher l'image precedente de la bannière
document.getElementById("arrow_left").addEventListener("click", previousSlide);

function previousSlide () {
	--i;
	--b;
	if (i === -1) {
		i = 3;
	}
	if (b === -1) {
		b = 3;
	}
	slideId = document.querySelector("#banner > img").innerHTML = slides[i].id;
	imageElement = document.querySelector("#banner > img").src = `.\\assets\\images\\slideshow\\${slides[i].image}`;
	tagLine = document.querySelector("#banner > p").innerHTML = slides[i].tagLine;
};

// creation des dotes et fonctions pour chaque image
slides.forEach(function(){
	let dotElement = document.createElement("div");
	dotElement.classList.add('dot');
	const sectionDots = document.querySelector(".dots");
	sectionDots.append(dotElement);

// donner un id a chaque dot pour identification	
	dotElement.id = [a++];

// ajouter une classe pour la première bulle de manière dynamique 
	if (dotElement.id == [b]){
		dotElement.classList.add('dot_selected');
	} else {
		dotElement.classList.remove('dot_selected');
	}

// ajouter une classe si l'image associée est sélectionnée
	document.getElementById("arrow_right").addEventListener("click", nextDot);
	document.getElementById("arrow_left").addEventListener("click", nextDot);

	function nextDot(){
		if (dotElement.id == [b]){
			dotElement.classList.add('dot_selected');
		} else {
			dotElement.classList.remove('dot_selected');
		}
	}
});