function diffArray(arr1, arr2) {
  // Si alguno de los dos arreglos esta vacio, devuelve el otro automaticamente
  if (arr1.length==0) {return arr2} else if (arr2.length==0){return arr1}
  
  let newArr = [];
  let contador = 0;
  //Uno los dos arreglos en uno
  arr1 = arr1.concat(arr2);
  let arrLength = arr1.length;
  //recorro el arreglo, y en cada elemento que tomo en primera instancia
  //vuelvo a recorrerlo para compararlo uno por uno con los demas.
  for (let i=0; i<arr1.length; i++) {
    for (let j=0; j<arrLength; j++) {
      if (arr1[i] == arr1[j]) {
        contador += 1;
      } 
    }
  //utilizo el contador para que, en caso de que el elemento aparezca
  //una sola vez (es decir, no se repita) se agregue al nuevo arreglo.
    if (contador <= 1) {
      newArr.push(arr1[i]);
      contador = 0;
    } else {
      contador = 0;
    }
  }
  return newArr;
}

diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
// [1, 2, 3, 5, 1, 2, 3, 4, 5]