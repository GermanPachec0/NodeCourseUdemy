import colors from 'colors';
import inquirer from 'inquirer';

colors.enable();

const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Que desea hacer?',
    choices: [{
      value: 1,
      name: `${'1.'.green} Buscar Ciudad`
    },
    {
      value: 2,
      name: `${'2.'.green} Historial`
    }
  ]
  }
];

export const inquirerMenu = async () => {
  console.clear();
  console.log("======================".green);
  console.log("Seleccione una opción".green);
  console.log("======================\n".green);

  const {opcion} = await inquirer.prompt(preguntas);
  return opcion;
};

export const pausa = async() => {
  const pregunta = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'enter'.green} para continuar`
    }
  ]

  await inquirer.prompt(pregunta)
}

export const leerInput = async (message) => {
  const question = {
    type: 'input',
    name: 'desc',
    message,
    validate(value) {
      if (value.length === 0) {
        return 'Ingrese un valor';
      }
      return true;
    }
  };
  const { desc } = await inquirer.prompt(question);
  return desc;
};

export const listadoTareasBorrar = async( tareas = []) =>{

  const choices = tareas.map((tarea,index) => {
    const i = `${index +1}`.green
    return {
      value: tarea.id,
      name: `${i} ${tarea.desc}`
    }
  });

  choices.unshift({
    value: '0',
    name: '0.'.green + 'Cancelar'
  })
  const preguntas = [
    {
      type: 'list',
      name: 'id',
      message: 'Borrar',
      choices
    }
  ]
  const {id} =  await inquirer.prompt(preguntas)

  return id;
}


export const confirmar = async(message) =>{
  const question =[
    {
      type: 'confirm',
      name: 'ok',
      message
    }
  ]
  const {ok} =  await inquirer.prompt(question)
  return ok;
}


export const mostrarListadoCheckList = async( tareas = []) =>{

  const choices = tareas.map((tarea,index) => {
    const i = `${index +1}`.green
    return {
      value: tarea.id,
      name: `${i} ${tarea.desc}`,
      checked: (tarea.completadoEn) ? true : false
    }
  });

  choices.unshift({
    value: '0',
    name: '0.'.green + 'Cancelar',
  })
  const pregunta = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Selecciones',
      choices
    }
  ]
  const {ids} =  await inquirer.prompt(pregunta)

  return ids;
}
