//setTimeout(() =>{
 // console.log('HOla')
//},1000)

const getUserById = (id,callback) =>{
  const usuario = {
    id,
    nombre: 'German'
  }
  setTimeout(() => {
    callback(usuario)
  },1500)
}

getUserById(10 , ( usuario ) =>{
  const {id , name} = usuario
  console.log(id,name)
})