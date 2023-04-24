const slides = [
	{
		"id":"1", "image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"id":"2", "image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"id":"3", "image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"id":"4", "image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// variables pour le slide et bannière

var i = 0;
console.log(i);
const banner = document.querySelector('#banner');

// Générer l'image et le text de la bannière


/*** generate dots for each slide *****/


//***all the dots in the world ****/
var dot;


slides.forEach(function(){
	var dotElement = document.createElement("div");
	dotElement.classList.add('dot');
	const sectionDots = document.querySelector(".dots");
	sectionDots.append(dotElement);
	var selectedDotElement


	const dotSlide = document.querySelector('dot');
});

function generateContent (){
	var slideId = document.querySelector("#banner > img").innerHTML = slides[i].id;
	var imageElement = document.querySelector("#banner > img").src = `.\\assets\\images\\slideshow\\${slides[i].image}`;
	var tagLine = document.querySelector("#banner > p").innerHTML = slides[i].tagLine;
};

generateContent();
/*** connect dot with individual slide *****/  

/**** arrow clikc event listener */

	// Sélectionner et afficher l'image suivante de la bannière
			document.getElementById("arrow_right").addEventListener("click", nextSlide);
			function nextSlide () {
					++i;
					var slideId = document.querySelector("#banner > img").innerHTML = slides[i].id;
					var imageElement = document.querySelector("#banner > img").src = `.\\assets\\images\\slideshow\\${slides[i].image}`;
					var tagLine = document.querySelector("#banner > p").innerHTML = slides[i].tagLine;
				if (i === 3) {
					i = -1;
				}
				
			console.log(i);
		};

	// Sélectionner et afficher l'image precedente de la bannière
		document.getElementById("arrow_left").addEventListener("click", previousSlide);

		function previousSlide () {
			--i;
			if (i === -1) {
				i = 3;
			}
			var slideId = document.querySelector("#banner > img").innerHTML = slides[i].id;
			var imageElement = document.querySelector("#banner > img").src = `.\\assets\\images\\slideshow\\${slides[i].image}`;
			var tagLine = document.querySelector("#banner > p").innerHTML = slides[i].tagLine;

		console.log(i);
	};

		

	
	// changer l'image de la bannière


  /*** function to replace href et text on click with 0 + 1 of the image/tagline */