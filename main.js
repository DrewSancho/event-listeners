var clicker = document.querySelector('#clicker');
var contents = document.querySelector('.nav-menu');

clicker.addEventListener('click', function () {
    if (contents.classList.contains('nav-menu')) {
        contents.classList.remove('nav-menu');
        contents.classList.add('nav-menu-hidden');
        clicker.textContent = 'show nav';
    } else {
        contents.classList.remove('nav-menu-hidden');
        contents.classList.add('nav-menu');
        clicker.textContent = 'hide nav';
    }
});

var textBox = document.querySelector('input');
var no2 = document.querySelector('.guest-list');

textBox.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        no2.innerHTML += '<li>' + textBox.value + '</li>';
        textBox.value = '';
    }
});

var textbox2 = document.querySelector('#add-guest-bonus input');
var no3 = document.querySelector('#add-guest-bonus .guest-list');

textbox2.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        no3.innerHTML += '<li class="guest">' + textbox2.value + '<button>X</button>' + '</li>';
        textbox2.value = '';
    }
});

no3.addEventListener('click', function (e) {
    if (e.target.matches('button')) {
        e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    }
});

