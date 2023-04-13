const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

slides.forEach(element => console.log(element));

/*** generate dots *****/

var dot = [];

slides.forEach(function(slide){


  dot.push(slide);
});

const dotElement = document.createElement("div");
dotElement.classList.add('dot');
const sectionDots = document.querySelector(".dots");
sectionDots.appendChild(dotElement);


/**** arrow clikc event listener */
document.getElementById("arrow_left").addEventListener("click", displayDate);

function displayDate() {
	document.getElementById("arrow_left").innerHTML = console.log("aaaaa");
}

document.getElementById("arrow_right").addEventListener("click", displayDate1);

function displayDate1() {
	document.getElementById("arrow_right").innerHTML = console.log("eeee");
  }