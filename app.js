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

let styles = `
    font-size:18px;
    line-height: 25px;
    color:grey;`

document.querySelector('*').style = styles;

let divWrapEl = document.createElement('form');
document.body.prepend(divWrapEl);
divWrapEl.style.display = 'flex';
divWrapEl.style.marginBottom = '20px'
divWrapEl.setAttribute('onsubmit', 'return false');

function addAttributesForInput(element,message='',type,id,classs,value='',pattern) {
    let elementWithAttribute = element;

    elementWithAttribute.setAttribute('type', type);
    elementWithAttribute.setAttribute('placeholder', `Type your ${message} here`);
    elementWithAttribute.setAttribute('class', classs);
    elementWithAttribute.setAttribute('id', id);
    elementWithAttribute.setAttribute('value', value);
    elementWithAttribute.setAttribute('pattern', pattern);
    elementWithAttribute.required = true;
    elementWithAttribute.maxlength = 32;
    elementWithAttribute.style.marginRight = '15px'
}

let inputNameEl = document.createElement('input');
addAttributesForInput(inputNameEl,'name','text','inpName','inp',undefined,'[A-Za-z]{1,32}');
let inputLastNameEl = document.createElement('input');
addAttributesForInput(inputLastNameEl,'last name','text','inpLastName','inp',undefined,'[A-Za-z]{1,32}');
let inputPhoneEl = document.createElement('input');
addAttributesForInput(inputPhoneEl,undefined,'tel','inpPhone','inp',undefined,'[0-9]{2} [0-9]{3} [0-9]{2} [0-9]{3} [0-9]{2}');
inputPhoneEl.placeholder = 'type your phone in format: 38 0XX XX XXX XX';
inputPhoneEl.setAttribute('size',inputPhoneEl.getAttribute('placeholder').length);
let buttonEl = document.createElement('button');
buttonEl.type = 'submit';
buttonEl.style.padding = '10px';
buttonEl.innerHTML = 'Press me 😜';

divWrapEl.append(inputNameEl);
divWrapEl.append(inputLastNameEl);
divWrapEl.append(inputPhoneEl);
divWrapEl.append(buttonEl);

let tableEl = document.createElement('table');
document.body.append(tableEl);
let tableHeadEl = document.createElement('thead');
tableEl.append(tableHeadEl);
let tableHeadRowEl = document.createElement('tr');
tableHeadEl.append(tableHeadRowEl);

function createCells(i,tag,where) {
    for(let x = 1; x <= i; x++) {
        let tableCell = document.createElement(tag);
        tableCell.setAttribute('id',`${tag}${x}`)
        tableCell.style.border = '1px solid black';
        tableCell.style.padding = '10px';
        where.append(tableCell);
    }
}
createCells(3,'th',tableHeadRowEl);

th1.innerHTML = 'Name';
th2.innerHTML = 'Last name';
th3.innerHTML = 'Phone number';

tableEl.style.border = '1px solid black';

let tableBodyEl = document.createElement('tbody');
tableEl.append(tableBodyEl);

let tableBodyRowEl = document.createElement('tr')
tableBodyEl.append(tableBodyRowEl);

createCells(3,'td',tableBodyRowEl);

let mainTableCellOneEl = document.querySelector('#td1');
let mainTableCellTwoEl = document.querySelector('#td2');
let mainTableCellThreeEl = document.querySelector('#td3');

buttonEl.addEventListener('click', onClick);

const patternName = inputNameEl.getAttribute('pattern');
const reName = new RegExp(patternName);
const patternPhone = inputPhoneEl.getAttribute('pattern');
const rePhone = new RegExp(patternPhone);




function onClick() {
    console.log('clicked');
    let pushedTextfromName = inputNameEl.value;
    let pushedTextfromLastName = inputLastNameEl.value;
    let pushedTextfromPhone = inputPhoneEl.value;
    if (pushedTextfromName.match(reName) && pushedTextfromLastName.match(reName) && pushedTextfromPhone.match(rePhone)) {
        
        mainTableCellOneEl.append(pushedTextfromName);
        mainTableCellTwoEl.append(pushedTextfromLastName);
        mainTableCellThreeEl.append(pushedTextfromPhone);
        inputNameEl.value = '';
        inputLastNameEl.value = '';
        inputPhoneEl.value = '';
    }

    function checkTable () {
        
    };
}