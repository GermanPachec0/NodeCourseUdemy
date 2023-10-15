const empleados = [
  {
    id: 1,
    nombre: "German"
  },
  {
    id: 2,
    nombre: "Pepe"
  },
  {
    id: 3,
    nombre: "Jose"
  },
];

const salarios = [
  {
    id: 1,
    nombre: 1000
  },
  {
    id: 2,
    nombre: 1500
  }
];

const getEmpleado = (id,callback) => {
  const empleado = empleados.find((e) =>  e.id == id)

  if(empleado){
     callback(null,empleado);
  }else{
     callback(`Empleado con ${id} not found`)
  }
}

const getSalario = (id,callback) => {
  const salario = salarios.find(s => s.id == id)?.salario

  if(salario){
    callback(null,salario)
  }else{
    callback(`Salario no encontrado`)
  }
}
const id = 10;
getEmpleado(id,(err,empleado) =>{
  if(err) {
  console.log("Error!")

    return console.log(err)
  }
  getSalario(id,(err,salario)=>{
    if(err){
      return console.log(err)
    }

    console.log(salario)
  })
})

