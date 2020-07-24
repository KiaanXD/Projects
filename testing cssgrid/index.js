console.log('test')
let breatheBtn = document.getElementById('breatheBtn');
let breatheStatus = document.getElementById('breatheStatus');
let breatheCount = document.getElementById('breatheCount');

breatheBtn.addEventListener('click', start);

function start() {
    breatheStatus.innerHTML = 'inhale'
    breatheCount.innerText = '5'
    breatheBtn.innerText = 'Stop Exersise'
}