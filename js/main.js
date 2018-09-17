// JavaScript Document

	
function hamburger(){
	document.getElementById("menu-items").style.display = "block";
	document.getElementById("hemburger_menu").style.display = "none";
	document.getElementById("cross").style.display = "block";
}
function closeit(){
	document.getElementById("menu-items").style.display = "none";
	document.getElementById("hemburger_menu").style.display = "block";
	document.getElementById("cross").style.display = "none";
}

function myFunction() {
	var w = window.outerWidth;
	if(w>480){
		document.getElementById("cross").style.display="none"
		document.getElementById("hemburger_menu").style.display="block"			
		document.getElementById("menu-items").style.display = "none";
	}
}