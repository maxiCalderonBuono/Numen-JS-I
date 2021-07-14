function esVocale(letra){
  
    let voc = ["a","e","i","o","u"]

    if (letra.length > 1) {
      return "Dato incorrecto";
    }
  
    for (let i = 0; i < 5 ; i++) {
       if (letra === voc[i]){
         return "Es vocal"
       }
       
    }
     return "No es vocal"
  }
  
  const iniciale = performance.now()
  
  console.log(esVocale("a"))
  
  const finale = performance.now()
  
  console.log(`La función usando for tardó en ejecutarse ${finale-iniciale} segundos`)

  function esVocal(letra){
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //Escribe tu código aquí
    let voca = ["a","e","i","o","u"]
  
    if (letra.length > 1) {
      return "Dato incorrecto";
    }
  
   return (voca.includes(letra)) ? "Es vocal": "No es vocal"
    
  }
  
  const inicio = performance.now()
  
  console.log(esVocal("a"))
  
  const fin = performance.now()
  
  console.log(`La función usando includes tardó en ejecutarse ${fin-inicio} segundos`)
  
  