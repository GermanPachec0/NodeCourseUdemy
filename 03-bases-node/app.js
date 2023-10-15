const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs.js')
const colors = require('colors')

console.clear()

 crearArchivo(argv.base, argv.l,argv.h).
 then((result) => {
    console.log('result'.rainbow,result)
  }).catch((err) => {
    err => console.log(err)
  });