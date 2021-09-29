// let buttonEl = document.querySelector('#btn');

// let inputEl = document.querySelector('#inp');

// let containerEl = document.querySelector('#box');


// buttonEl.addEventListener('click', onLick);

// function onLick() {
//     console.log('clicked');
//     let pushedText = inputEl.value;
//     containerEl.insertAdjacentHTML('beforeend', `<p>${pushedText}</p>`);
//     inputEl.value = inputEl.value.remove;
//     inputEl.value = '';
// }

let divWrapEl = document.createElement('form');
document.body.prepend(divWrapEl);
divWrapEl.style.display = 'flex';
divWrapEl.style.justifyContent = 'space-evenly';
divWrapEl.style.width = '900px';

function addAttributes(element,message='',type,id,classs,value='') {
    let elementWithAttribute = element;

    elementWithAttribute.setAttribute('type', type);
    elementWithAttribute.setAttribute('placeholder', `Type your ${message} here`);
    elementWithAttribute.setAttribute('class', classs);
    elementWithAttribute.setAttribute('id', id);
    elementWithAttribute.setAttribute('value', value);
}

let inputNameEl = document.createElement('input');
addAttributes(inputNameEl,'name','text','inpName','name');
let inputLastNameEl = document.createElement('input');
addAttributes(inputLastNameEl,'last name','text','inpLastName','last-name');
let inputPhoneEl = document.createElement('input');
addAttributes(inputPhoneEl,undefined,'tel','inpPhone','phone');
inputPhoneEl.placeholder = 'type your phone in format: 38 0xx xx xxx xx';
inputPhoneEl.setAttribute('size',inputPhoneEl.getAttribute('placeholder').length);
inputPhoneEl.setAttribute('pattern','[0-9]{2} [0-9]{3} [0-9]{2} [0-9]{3} [0-9]{2}');
let buttonEl = document.createElement('button');
buttonEl.type = 'button';
buttonEl.style.padding = '10px';
buttonEl.innerHTML = 'Press me 😜';

divWrapEl.append(inputNameEl);
divWrapEl.append(inputLastNameEl);
divWrapEl.append(inputPhoneEl);
divWrapEl.append(buttonEl);