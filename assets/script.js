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
var i = 0;
var a = 0;
var b = 0;
const banner = document.querySelector('#banner');

// Générer l'image et le text de la bannière

	var slideId = document.querySelector("#banner > img").innerHTML = slides[i].id;
	var imageElement = document.querySelector("#banner > img").src = `.\\assets\\images\\slideshow\\${slides[i].image}`;
	var tagLine = document.querySelector("#banner > p").innerHTML = slides[i].tagLine;

/*** generate dots for each slide *****/

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
					var slideId = document.querySelector("#banner > img").innerHTML = slides[i].id;
					var imageElement = document.querySelector("#banner > img").src = `.\\assets\\images\\slideshow\\${slides[i].image}`;
					var tagLine = document.querySelector("#banner > p").innerHTML = slides[i].tagLine;

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
				var slideId = document.querySelector("#banner > img").innerHTML = slides[i].id;
				var imageElement = document.querySelector("#banner > img").src = `.\\assets\\images\\slideshow\\${slides[i].image}`;
				var tagLine = document.querySelector("#banner > p").innerHTML = slides[i].tagLine;
	};


	slides.forEach(function(){
		var dotElement = document.createElement("div");
		dotElement.classList.add('dot');
		const sectionDots = document.querySelector(".dots");
		sectionDots.append(dotElement);

		dotElement.id = [a++];


			if (dotElement.id == [b]){
				dotElement.classList.add('dot_selected');
			} else {
				dotElement.classList.remove('dot_selected');
			}
		
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

	// changer l'image de la bannière


  /*** function to replace href et text on click with 0 + 1 of the image/tagline */