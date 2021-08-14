// Clase Padre Animal exportada como default
class Animal {
	constructor(nombre, edad, img, comentarios, sonido){
		let _nombreAnimal = nombre;
		let _edad = edad;
		let _img = img;
		let _comentarios = comentarios;
		let _sonido = sonido;

		this.getNombre = () => _nombreAnimal;
		this.getEdad = () => _edad;
		this.getImg = () => _img;
		this.getSonido = () => _sonido;

		this.setComentarios = (commentary) => _comentarios = commentary;
	}
	get Nombre(){
		return this.getNombre()
	}
	get Edad(){
		return this.getNombre()
	}
	get Img(){
		return this.getNombre()
	}
	get Sonido(){
		return this.getNombre()
	}

	set Comentarios(new_commentary){
		this.setComentarios = new_commentary
	}
}

export default let Saludar = (name) => console.log(`Hola que tal ${name}`)
