import Animal from "./animalSuperClass"

class Leon extends Animal{
	constructor(nombre, edad, img, comentarios, sonido){
		super(nombre, edad, img, comentarios, sonido)
	}
	rugir(){
		return console.log('GRRR');
	}
}

export Leon
