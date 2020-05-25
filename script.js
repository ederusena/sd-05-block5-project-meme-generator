let fileInput;
let memeImage;
let memeText;
let textInput;
let buttons;
function process() {
  memeImage.src = URL.createObjectURL(this.files[0]);
}
function initializeElements() {
  fileInput = document.querySelector('#meme-insert');
  memeImage = document.querySelector('#meme-image');
  memeText = document.querySelector('#meme-text');
  textInput = document.getElementById('text-input');
  // Initialize Buttons
  buttons = [
    document.querySelector('#btn-fire'),
    document.querySelector('#btn-water'),
    document.querySelector('#btn-earth')
  ];
}
function setBorder(element) {
  const container = document.querySelector('#meme-image-container');
  const border = element.target.id;
  container.className = `image-container ${border.split('-')[1]}-border`;
  console.log(element.target.style)
  container.style.borderColor = element.target.style.backgroundColor;
}
window.onload = function () {
  initializeElements();
  fileInput.addEventListener('change', process);
  textInput.addEventListener('keyup', function(el) {
    let txt = (el.target.value);
    memeText.innerText = txt;
  });
  buttons.forEach((button) => {
    button.addEventListener("click", setBorder);
  });
}
