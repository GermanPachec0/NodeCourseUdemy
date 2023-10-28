import { inquirerMenu, leerInput, pausa } from "./helpers/inquirer.js"
import Busquedas from "./models/busqueda.js";
import axios from "axios";

const main = async() => {
  let opt;
  const busquedas = new Busquedas();

  do{
    opt = await inquirerMenu();

    switch(opt){
      case 1:
          //mostrar mensaje
          const lugar = await leerInput('Ciudad: ');
          await busquedas.ciudad(lugar)
          console.log(lugar)
          //buscar lugares
          //seleccionar el lugar
          //clima
          //mostrar resultados
          console.log('\nInfo de la ciudad'.green);
          console.log('Ciudad:',);
          console.log('Lat:',) 
          console.log('Lng:',)
          console.log('Temperatura:',) 
          console.log('Min:',) 
          console.log('Max:',) 


      break;
    }

    if(opt !== 0) await pausa();
    await pausa();
  } while (opt !=0)
  console.log(text)
}

main()