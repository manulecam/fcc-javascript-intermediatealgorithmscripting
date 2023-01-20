function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  str = str.replace(/\s+|_+/g, "-");
  return str.toLowerCase();
}

//
spinalCase("AllThe-small Things InHere");