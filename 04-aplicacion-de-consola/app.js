import colors from 'colors';
import { inquirerMenu, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheckList } from './helpers/inquirer.js';
import { pausa } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';
colors.enable();

console.clear();

const main = async () => {
  let opt = '';
  const tareas = new Tareas()
  const tareasDB = leerDB();
  if(tareasDB) {
    tareas.cargarTareasFromArray(tareasDB)
  }
  do {
    const opt  = await inquirerMenu();
    switch (opt) { // switch on opt instead of response
      case '1':
        const desc = await leerInput('Descripción: ');
        tareas.crearTarea(desc);
        break;
      case '2':
        tareas.listadoCompleto()
        break;
      case '3':
        tareas.listarPendientesCompletadas(true)
        break;
      case '4':
        tareas.listarPendientesCompletadas(false)
        break;
      case '5':
        const ids = await mostrarListadoCheckList(tareas.listadoArr);
        tareas.toggleCompletadas(ids)
        break;
      case '6':
        const id = await listadoTareasBorrar(tareas.listadoArr)
        if(id != '0'){
        const ok = await confirmar('esta seguro?')
        if(ok){
          tareas.borrarTarea(id);
          console.log('Tarea Borrada')
        }
      }

        break;                   
      
    }
    guardarDB(tareas.listadoArr);
    await pausa();
  } while (opt !== '0');
};

main();
