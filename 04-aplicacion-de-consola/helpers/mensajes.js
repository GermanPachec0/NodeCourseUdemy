import { stdin } from 'process';
import readline from 'readline';

import colors from 'colors';
colors.enable();

export const mostrarMenu = ()  => {
  return new Promise(resolve=>{
      console.clear();
  console.log("======================".green)
  console.log("Seleccione una opción".green)
  console.log("======================\n".green)
  console.log(`${'1.'.green} Crear Tarea`);
  console.log(`${'2.'.green} Listar Tareas`);
  console.log(`${'3.'.green} Listar Tareas completadas`);
  console.log(`${'4.'.green} Listar Tareas pendientes(s)`);
  console.log(`${'5.'.green} Completar tareas(s)`);
  console.log(`${'6.'.green} Borrar Tarea`);
  console.log(`${'0.'.green} Salir\n`);


  const readLine = readline.createInterface({input: process.stdin, output: process.stdout})
  readLine.question('Seleccione una opción: ', (opt) => {
    readLine.close();
    resolve(opt);
  })
  })

}

export const pausa = () => {
  return new Promise(resolve => {
    const readLine = readline.createInterface({input: process.stdin, output: process.stdout})
    readLine.question(`Presione ${'ENTER'.green} para continuar\n`, (opt) => {
    readLine.close()
    resolve()
  })
  })

}

