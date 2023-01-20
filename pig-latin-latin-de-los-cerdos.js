function translatePigLatin(str) {
  // 1. Creare una variable para almacenar luego la primer letra
  const consonants = "bcdfghjklmnpqrstvwxyz";
  const vocals = "aeiou"
  let firstLetter = "";
  let newStr = "";
  let breakFor = false;
  // 2. Recorreré la cadena ingresada letra a letra
  for (let i=0; i<str.length; i++) {
    // 3. Si la primera letra es una consonante la agrega a la variable creada
    if (!breakFor && consonants.indexOf(str[i]) >= 0) {
      firstLetter += str[i];
    // 4. Si no, cambia el breakFor para no volver a entrar al primer if y continuar almacenando las demas letras
    } else {
      newStr += str[i];
      breakFor = true;
    }
  }
  // 5. Si la primer letra de la cadena ingresada es una Vocal, regresa la cadena con "way" al final
  if (vocals.indexOf(str[0]) >= 0) {
    return str + "way"
  }
  // 5b. Si no, regresa la nueva cadena
  return newStr + firstLetter + "ay";
}

console.log(translatePigLatin("algorithm"));