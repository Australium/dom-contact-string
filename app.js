let buttonEl = document.querySelector('#btn');

let inputEl = document.querySelector('#inp');

let containerEl = document.querySelector('#box');


buttonEl.addEventListener('click', onLick);

function onLick() {
    console.log('clicked');
    let pushedText = inputEl.value;
    containerEl.insertAdjacentHTML('beforeend', `<p>${pushedText}</p>`);
    inputEl.value = inputEl.value.remove;
    inputEl.value = '';
}