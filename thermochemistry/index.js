const reactants = document.querySelector('.reactants');
const products = document.querySelector('.products');
const lowerDropZone = document.querySelector('.lower-dropZone');
const upperDropZone = document.querySelector('.upper-dropZone');

reactants.addEventListener('dragstart', function (e) {
  console.log(e);
});

products.addEventListener('dragstart', function (e) {
  console.log(e);
});

lowerDropZone.addEventListener('dragover', function (e) {
  e.preventDefault(e);
});

upperDropZone.addEventListener('dragover', function (e) {
  e.preventDefault(e);
});

lowerDropZone.addEventListener('drop', function (e) {
  lowerDropZone.innerHTML = products.innerHTML;
});

upperDropZone.addEventListener('drop', function (e) {
  upperDropZone.innerHTML = reactants.innerHTML;
});

document.querySelector(
  'footer'
).innerHTML = `<p>Copyright &copy; Danilo Morais Itokagi. All rights reserved. ${new Date().getFullYear()}</p>`;
