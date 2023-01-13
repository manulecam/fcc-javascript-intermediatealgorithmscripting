// Cambia solo el código debajo de esta línea
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
};
// Cambia solo el código encima de esta línea
console.log(urlSlug(" Winter Is  Coming"));