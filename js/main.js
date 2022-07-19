import Kanban from "./view/Kanban.js";

new Kanban(
	document.querySelector(".kanban")
);

// creacion del evento 

formulario.addEventListener("submit", validarFormulario)

// funciones 

function validarFormulario(e){

	e.preventDefaul();
	const titulo = document.querySelector("#titleTask").value
	const responsable = document.querySelector("#responsibleTask").value
	const diaEntrega = document.querySelector("#deadLineTask").value
	
	const respuesta = document.getElementsByClassName("kanban__column");
	respuesta.textContent = `titulo ${titleTask} responsable ${responsibleTask} dia de entrega ${deadLineTask}`


}