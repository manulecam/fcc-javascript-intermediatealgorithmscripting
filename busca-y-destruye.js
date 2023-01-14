function destroyer(arr) {
  let newArr = [];
  let destroy = false;
  for (let element in arr) {
    destroy = false;
    for (let i=1; i<arguments.length; i++) {
      if (arr[element] == arguments[i]) {
        destroy = true;
        break;
      }
    }
    if (destroy == false) {
      newArr.push(arr[element]);
      destroy = false;
    }
  }
  return newArr;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);