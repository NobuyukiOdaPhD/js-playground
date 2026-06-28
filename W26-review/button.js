let number = 0;

const button = document.querySelector('#btn');
const count = document.querySelector('#counter');

button.addEventListener('click', () => {
number++;
count.textContent = '回数: ' + number;
}
)