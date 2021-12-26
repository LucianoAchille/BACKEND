//console.log("hola");
class Usuario {
    constructor (nombre, apellido,libros,mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros || []
        this.mascotas = mascotas || []
    }
    getFullName(){
        return `Nombre completo: ${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota){
        this.mascotas.push(mascota);

    }
    countMascotas(){
        let cont = 0;
        for(let i=0; i<this.mascotas.length;i++){
            cont++;
        }
        return `El usuario ${this.nombre} ${this.apellido} tiene ${cont} mascotas`;
    }
    addBook(nombre,autor){
        this.libros.push({nombreLibro: nombre,autor: autor});
    }
    getBookNames(){
        let array = [];
        this.libros.map(array.push({nombre: this.libros.nombre}))
    
    }    

}
//const usuario1 = new Usuario("nombre1","apellido1",{nombreLibro:"libro1",autor:"autor1"},["perro","gato"]);
//console.log(usuario1.getFullName());
/*
for (let i=0;i<usuario1.mascotas.length;i++){
    console.log(usuario1.mascotas[i])
}
let mascotaNueva = "pez";
usuario1.addMascota(mascotaNueva);
for (let i=0;i<usuario1.mascotas.length;i++){
    console.log(usuario1.mascotas[i])
}
console.log(usuario1.countMascotas());*/
/*
for(let i=0;i<usuario1.libros.length;i++){
    console.log(usuario1.libros[i])
}*/
/* agregar objeot al arreglo
let user = new Usuario("luciano", "achille",[{nombreLibro:"libro1",autor: "autor1"},{nombreLibro:"libro11",autor: "autor11"}],["perro","gato"])
*/



