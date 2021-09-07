const turnOn = document.querySelector("#turnOn");
const turnOff = document.querySelector("#turnOff");
const lamp = document.querySelector("#lamp");

const lampOn = () => {
    lamp.src = './img/ligada.jpg'
};

const lampOff = () => {
    lamp.src = './img/desligada.jpg'
};

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);