function pairElement(str) {
  // 1. Crear un arreglo principal (mainArr) en el cual se almacenara el resultado final
  let mainArr = [];
  let tempArr = [];
  // 2. Recorrer el string letra por letra.
  for (let i=0; i<str.length; i++) {
    // 3. En cada iteracion, se agrega la letra a un array temporal, y a través de un condicional se agrega la segunda letra correspondiente.
    tempArr.push(str[i]);
    // 4. Se pushea el array temporal al array final, y asi con todas las letras correspondientes.
    if (tempArr[0] == "G"){
      tempArr.push("C");
      mainArr.push(tempArr);
      tempArr = [];
    } else if (tempArr[0] == "C") {
      tempArr.push("G");
      mainArr.push(tempArr);
      tempArr = [];
    } else if (tempArr[0] == "T") {
      tempArr.push("A");
      mainArr.push(tempArr);
      tempArr = [];
    }else if (tempArr[0] == "A") {
      tempArr.push("T");
      mainArr.push(tempArr);
      tempArr = [];
    }
  }
  // 5. Finalmente se retorna el mainArr
  return mainArr;
}

pairElement("GCG");