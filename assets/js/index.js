import {Animal, Leon, Lobo, Oso, Serpiente, Aguila} from './modules/animalsClass.js'

// Id's captures
const selectAnimal = document.getElementById('animal');
const selectAgeAnimal = document.getElementById('edad');
const btnRegister = document.getElementById('btnRegistrar');
const comentaryArea = document.getElementById('comentarios');
const imageArea = document.getElementById('preview');
const tableArea = document.getElementById('Animales');
const modal = document.getElementById('exampleModal');

const url = 'http://127.0.0.1:8080';
const jsonFile = './animales.json';

// Immediately-invoked Function Expressions (IIFE) to clean data
(()=>{
	selectAnimal.selectedIndex=0;
	selectAgeAnimal.selectedIndex=0;
	comentaryArea.value ='';
	imageArea.innerHTML='';
})()

// Load selected images
selectAnimal.addEventListener('change', async () => {
	imageArea.setAttribute('style','overflow:hidden;background-image:none;');
	let response = await getData(selectAnimal.value)
	imageArea.innerHTML = `<img class="mx-auto d-block" style="height:100%;" src="./assets/imgs/${response.imagen}" alt="Imagen de animal seleccionado"></img>`
})

// Get data Animals
const getData = async (animal) => {
	try{
		const urlPhoto = await fetch(`${url}/${jsonFile}/`);
		const resJSON = await urlPhoto.json();
		const findAnimal = resJSON.animales.find(element => element.name == animal);
		return findAnimal;
	} catch(error){
		console.log(error)
	}
}

//----------------------------------------------------------------------------------------------
// Show Modal
const modalBody = document.getElementById('modalBody');

window.showModal = (i) => { // $$$
	//console.log(wildAnimals[i]);
	//console.log(wildAnimals[i].getImg());
	modalBody.innerHTML = `
		<img class="w-100 pb-3" src="assets/imgs/${wildAnimals[i].getImg()}" alt="">
		<p class="text-light text-center py-1">${wildAnimals[i].getEdad()}</p>
		<p class="text-light text-center py-2">Comentarios</p>
		<p class="text-light text-center py-1">${wildAnimals[i].getComentarios()}</p>
		`;
};
//----------------------------------------------------------------------------------------------

// Add animals to left area
const addAnimalArea = () => {
	//tableArea.innerHTML = '';
	let template =''; 
	wildAnimals.forEach((element, index) => {
		template += `
					<div class="card m-3" style="width: 18rem;" onclick="showModal(${index})" data-toggle="modal" data-target="#exampleModal">
						<img src="assets/imgs/${element.getImg()}" class="card-img-top" alt="..."> <div class="card-body bg-dark py-2">
							<audio controls src="${element.getSonido()}" style="width:50%;"></audio>
						</div>
					</div>
	`;
	})

	tableArea.innerHTML = template;
}

let wildAnimals = [];

// Click on button 'Agregar'
btnRegister.addEventListener('click', async () => {

	const response = await getData(selectAnimal.value)
	const responseName = response.name;
	const imgAnimal = response.imagen;
	const soundAnimal = `assets/sounds/${response.sonido}`;

	const selectedAnimal = selectAnimal.value;
	const ageAnimal = selectAgeAnimal.value;
	const comentary = comentaryArea.value;

	if( selectedAnimal != '' && ageAnimal != '' && comentary != '' ){
		switch(selectedAnimal){
			case 'Leon':
				// Instructions
				wildAnimals.push(new Leon(responseName, ageAnimal, imgAnimal, comentary, soundAnimal));
				break;
			case 'Lobo':
				// Instructions
				wildAnimals.push(new Lobo(responseName, ageAnimal, imgAnimal, comentary, soundAnimal));
				break;
			case 'Oso':
				// Instructions
				wildAnimals.push(new Oso(responseName, ageAnimal, imgAnimal, comentary, soundAnimal));
				break;
			case 'Serpiente':
				// Instructions
				wildAnimals.push(new Serpiente(responseName, ageAnimal, imgAnimal, comentary, soundAnimal));
				break;
			case 'Aguila':
				// Instructions
				wildAnimals.push(new Aguila(responseName, ageAnimal, imgAnimal, comentary, soundAnimal));
				break;
			default:
				// Instructions
				alert('La opcion seleccionada no es valida.')
				break;
		}
		//console.log(newAnimal)
		addAnimalArea();

		selectAnimal.selectedIndex=0;
		selectAgeAnimal.selectedIndex=0;
		comentaryArea.value ='';
		imageArea.innerHTML='';

	} else {
		alert('Debe ingresar los datos para continuar.')
	}
})

