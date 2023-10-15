
const fs = require('fs')
const colors = require('colors')
const crearArchivo = async (base = 5,l,h) => {
  try {
      let salida = '';
      for(let  i = 0 ; i<=h ; i++){
        salida += (`${base} x ${i} = ${base * i}\n`)
      }
      fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
      if(l){
      console.log(salida.blue)

      }
  } catch (error) {
    console.log(error)
  }


}

module.exports = {
  crearArchivo
}