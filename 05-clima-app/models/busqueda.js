import axios from "axios";

class Busquedas {
  historial = ['Tegucigalpa', 'Madrid','San José','Bogotá'];
  constructor(){
    //TODO:

  }
  async ciudad(lugar = ''){
      //peticion http
      try{
      const resp = await axios.get('https://reqres.in/api/users?page=2')
      console.log(resp.data.per_page);

      }catch(error){
        return[];
      }
      return []; //retornar los lugares
  }
}

export default Busquedas