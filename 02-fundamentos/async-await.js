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
    salario: 1000
  },
  {
    id: 2,
    salario: 1500
  }
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
     const empleado = empleados.find((e) =>  e.id == id)
     empleado
     ? resolve(empleado)
     : reject(`No existe el empleado con id ${id}`);
     });
}

const getSalario = (id) => {
  return new Promise((resolve,reject) => {
    const salario = salarios.find((s) => s.id == id)
    salario ? resolve(salario) : reject(`No existe el salario`)
  });
}

const id = 3;

const getInfoUsuario = async(id) =>{

  try{
    const empleado  = await getEmpleado(id);
    const salario  = await getSalario(id);
    return empleado;
  }catch(error){
    throw error;
  }

}

getInfoUsuario(id).then( msg => console.log(msg))
  .catch(err => console.log(err))
