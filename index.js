class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas


    }

    getFullName() {
        console.log(`El usuario es ${this.nombre} ${this.apellido}`)
    }
    addMascota(newMascota) {
        this.mascotas.push(newMascota)
        console.log(`Usted ha agregado a un ${this.mascotas}`)

    }
    countMascotas() {
        // console.log(this.mascotas.lenght)
        return this.mascotas.length


    }
    addBook(nombreLibro, autorLibro) {
        this.libros.push({ nombre: nombreLibro, autor: autorLibro })
        console.log(this.libros)
    }
    getBookNames() {
        return this.libros.map(libros => libros.nombre)
    }




}
let usuario = new Usuario("Santiago", " Gennuso", [{ nombre: "La odisea", autor: "Homero", }], []);

console.log(usuario.getFullName())
console.log(usuario.addMascota("Tortuga"))
console.log(usuario.countMascotas())
console.log(usuario.addBook("Harry Potter", "J. K. Rowling"))
console.log(usuario.getBookNames())


