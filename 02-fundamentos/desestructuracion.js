const deadpool = {
  nombre: 'wade',
  apellido: 'winston',
  poder: 'regeneracion',
  edad: 23,
  getNombre: function(){
    return `${this.nombre} ${this.apellidos}`
  }
}

function imprimeHeroe({nombre, apellido, poder , edad}){
    console.log(nombre,apellido,poder,edad);
}

//imprimeHeroe(deadpool)

const heroes = ['Deadpool','superman', 'batman'];
const [,,h3] = heroes

console.log(h3)