function fearNotLetter(str) {
  const abecedario = "abcdefghijklmnopqrstuvwxyz";
  let index = abecedario.indexOf(str[0]);
  for (let i=0; i<str.length; i++) {
    if(abecedario[index] != str[i]) {
      return abecedario[index]
    } 
    index ++;
  }
  return undefined;
}

fearNotLetter("stvwx");