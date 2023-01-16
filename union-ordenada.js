function uniteUnique(arr) {
  // Unificar arreglos
  for (let i=1; i<arguments.length; i++) {
    arr = arr.concat(arguments[i])
  }  
  // -------------------
  let newArr = [arr[0]];
  let repetido = false;
  // 1. recorrer el arreglo original
  for (let j=1; j<arr.length; j++) {
    console.log(arr[j])
    // 2. Tomar cada elemento, y recorrer el newArr comparandolo con cada elemento agregado
    for (let k=0; k<newArr.length; k++) {
      // 3. Si el elemento se encuentra en el newArr, corta el bucle y repetido = true
      if (arr[j] == newArr[k]) {
        repetido = true;
        break;
      }
    }
    // 4. cuando sale del bucle, si repetido es false agrega el elemento a newArr, pero si es true simplemente no lo agrega y repetido pasa a ser false
    if (repetido == false) {
      newArr.push(arr[j])
    } else {
      repetido = false;
    }
  }
  return newArr;
}
uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]);