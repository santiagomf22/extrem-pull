import relajaExtremidadesSPage3 from "../vistas/relajaExtremidadesSPage3.view.js"
export default () => {
	const divElement = document.createElement('div'),
		nextPresentation = document.querySelector("#nextPresentation"),
		prevPresentation = document.querySelector("#prevPresentation")
	divElement.classList.add("relajaExtremidadesS-container")
	divElement.innerHTML = relajaExtremidadesSPage3();

	document.body.style.backgroundColor="#FFF"

	document.querySelector(".navbar").style.backgroundImage=""
	document.querySelector(".navbar").style.backgroundRepeat=""
	document.querySelector(".navbar").style.backgroundPosition=""
	document.querySelector(".navbar").style.backgroundSize=""

	divElement.style.backgroundImage=""
	divElement.style.backgroundRepeat=""
	divElement.style.backgroundPosition=""
	divElement.style.backgroundSize=""

	nextPresentation.href = "#/relaja-extremidades-page4";
	prevPresentation.href = "#/relaja-extremidades-page2";

	window.addEventListener("keydown", function (event) {
		// 37 = Atras, 39 = Adelante
	  if(event.keyCode == 37){
	  	prevPresentation.click()
	  }
	  if(event.keyCode == 39){
	  	nextPresentation.click()
	  }
	},false);
	
	return divElement;
}