const cert = document.getElementById('certifications');
const CC = document.getElementById('CC');
const QC = document.getElementById('QC');
const BM = document.getElementById('BM');


let cert1active = true;
let cert2active = true;
let cert3active = true;
let clicked1 = false
let clicked2 = false
let clicked3 = false
let clicked4 = false 
let clicked5 = false
let clicked6 = false
let clicked7 = false
let clicked8 = false 
let clicked9 = false 

function CC1() {
if (!cert1active) return;
if (clicked1 == false) {
	if (clicked3 == false & clicked4 == false & clicked5 == false & clicked6 == false & clicked7 == false & clicked8 == false & clicked9 == false ){
		var img = document.getElementById("image1");
		img.src="./resources/images/LCSS.png";
		clicked1 = false;
		cert2active = false;
		cert3active = false;
		clicked3 = true;
	} else if(clicked3 == true & clicked4 == false & clicked5 == false & clicked6 == false & clicked7 == false & clicked8 == false & clicked9 == false ) {
		var img = document.getElementById("image1");
		img.src="./resources/images/LCSSInter.png";
		clicked1 = false;
		cert2active = false;
		cert3active = false;
		clicked4 = true;
	} else if (clicked3 == true & clicked4 == true & clicked5 == false & clicked6 == false & clicked7 == false & clicked8 == false & clicked9 == false ) {
		var img = document.getElementById("image1");
		img.src="./resources/images/LHTML.png";
		clicked1 = false;
		cert2active = false;
		cert3active = false;
		clicked5 = true;
	} else if (clicked3 == true & clicked4 == true & clicked5 == true & clicked6 == false & clicked7 == false & clicked8 == false & clicked9 == false ) {
		var img = document.getElementById("image1");
		img.src="./resources/images/LJS.png";
		clicked1 = false;
		cert2active = false;
		cert3active = false;
		clicked6 = true;
	} else if (clicked3 == true & clicked4 == true & clicked5 == true & clicked6 == true & clicked7 == false & clicked8 == false & clicked9 == false ) {
		var img = document.getElementById("image1");
		img.src="./resources/images/LP3.png";
		clicked1 = false;
		cert2active = false;
		cert3active = false;
		clicked7 = true;
	} else if (clicked3 == true & clicked4 == true & clicked5 == true & clicked6 == true & clicked7 == true & clicked8 == false & clicked9 == false ) {
		var img = document.getElementById("image1");
		img.src="./resources/images/LCLine.png";
		clicked1 = false;
		cert2active = false;
		cert3active = false;
		clicked8 = true;
	} else if (clicked3 == true & clicked4 == true & clicked5 == true & clicked6 == true & clicked7 == true & clicked8 == true & clicked9 == false ) {
		var img = document.getElementById("image1");
		img.src="./resources/images/Web.jpg";
		clicked1 = false;
		cert2active = false;
		cert3active = false;
		clicked9 = true;
		
	} else {
		
		var img = document.getElementById("image1");
		img.src="./resources/images/educat.png";
		clicked1 = false;
		cert2active = true;
		cert3active = true;
		clicked3 = false;
		clicked4 = false; 
		clicked5 = false;
		clicked6 = false;
		clicked7 = false;
		clicked8 = false;
		clicked9 = false;
	};
	

}else {
	var img = document.getElementById("image1");
	img.src="./resources/images/educat.png";
	clicked1 = false;
	cert1active = true;
	cert2active = true;
	cert3active = true;
	clicked3 = false;
	clicked4 = false; 
	clicked5 = false;
	clicked6 = false;
	clicked7 = false;
	clicked8 = false;

};
}






function QC1() {
	if (!cert2active) return;
	if (clicked1 == false) {
		if (clicked2 == false) {
			var img = document.getElementById("image1");
			img.src="./resources/images/PTLVL2.jpeg";
			clicked1 = false;
			cert1active = false;
			cert3active = false;
			clicked2 = true;
		} else {
			var img = document.getElementById("image1");
			img.src="./resources/images/VTLVL2.jpeg";
			clicked1 = true;
			cert1active = false;
			cert3active = false;
			clicked2 = false;
	}; 
	} else {
		var img = document.getElementById("image1");
		img.src="./resources/images/educat.png";
		clicked1 = false;
		cert1active = true;
		cert2active = true;
		cert3active = true;	
	};
	}

function BM1() {
	if (!cert3active) return;
	if (clicked1 == false) {
		var img = document.getElementById("image1");
		img.src="./resources/images/Boilermaker.jpeg";
		clicked1 = true;
		cert1active = false;
		cert2active = false;
	} else {
		var img = document.getElementById("image1");
		img.src="./resources/images/educat.png";
		clicked1 = false;
		cert1active = true;
		cert2active = true;
		cert3active = true;
	};
	}	


  