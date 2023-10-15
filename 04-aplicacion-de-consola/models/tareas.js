import { Tarea } from "./tarea.js";
import colors from 'colors';
colors.enable();
export class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach(key => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });
    return listado;
  }

  constructor(){
    this._listado = {};
  }

  crearTarea(desc = ''){
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea
  }

  cargarTareasFromArray(tareas = []){
    tareas.forEach(t => this._listado[t.id] = t)
  }

  listadoCompleto(){
    this.listadoArr.forEach((t,index) => {
        const i = `${index + 1}`.green
        const { desc , completadoEn } = t;
        const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red
        
        console.log(`${i} ${desc} ${estado}` )
      }
    )
  }

  listarPendientesCompletadas( completadas = true){
      console.log()
      let contador = 0;
      this.listadoArr.forEach((t,index) => {
        const i = `${index + 1}`.green
        const { desc , completadoEn } = t;
        const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red
        if(completadas){
          if(completadoEn){
            contador += 1
            console.log(`${contador.toString().green + '.'.green} ${desc}:: ${completadoEn}` )
          }
        }else{
          if(!completadoEn){
            contador += 1
          console.log(`${contador.toString().green + '.'.green} ${desc}:: ${estado}` )
          } 

        }
      }
      
    )
  }

  borrarTarea( id = ''){
    if(this._listado[id]){
      delete this._listado[id]
    }
  }

  toggleCompletadas(ids = []){
    ids.forEach(id => {
      const tarea = this._listado[id];
      if(!tarea.completadoEn){
        tarea.completadoEn = new Date().toISOString()
      }
    })
    this.listadoArr.forEach(tarea => {
      if(!ids.includes(tarea.id)){
        this._listado[tarea.id].completadoEn = null;
      }
    })
  }

}