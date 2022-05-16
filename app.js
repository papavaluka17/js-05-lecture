const display = document.querySelector('.display-none')
const form2 = document.getElementById('form2')
const input = document.querySelector('.input')
const box = document.getElementById('box');
const error = document.getElementById('error')


function modal() {
  display.classList.toggle('display-none');
  error.textContent = '';
}

form2.addEventListener('submit', function (event) {
  event.preventDefault();
  error.textContent = '';

  if (input.value.trim()) {
    box.classList.add('display-none')
    form2.reset();
  } else {
    error.style.display = 'block'
    error.textContent = 'Empty value provided'
  }
})



const form5 = document.getElementById('form5')
const btn = document.getElementById('btn')
const ul = document.createElement('ul')
const input2 = document.getElementById('input2')

form5.appendChild(ul)

form5.addEventListener("submit", function (event) {
  event.preventDefault();

  if (input2.value.trim()) {
    const li = document.createElement("li");
    li.textContent = input2.value;
    const button = document.createElement("button");
    button.textContent = "remove";

    button.addEventListener("click", function () {
      li.remove();
    });


    ul.appendChild(li);
    li.appendChild(button);

    input2.value = "";
    input2.focus();
  }
});