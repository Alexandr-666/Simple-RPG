var playerobj = {
    health: 100,
    damage: 11
}

var player = document.getElementById('health');
var attack = document.getElementById('attack');
var hp = document.getElementById('hp');
var dps = document.getElementById('dps');
var HP = document.getElementById('border');


attack.onclick = function () {
    var random = getRandomInt(8, 14);

    var hp2 = playerobj.health = playerobj.health - random;
    var hpBar = hp.style.width = playerobj.health + '%';
    player.innerHTML = hpBar;
    dps.innerHTML = random;

    if (playerobj.health <= 0) {
        player.innerHTML = '0';
        hp.style.width = 0 + '%';
        HP.style.border = '2px solid red';
        clearInterval(interval);
    }
}

function regen() {
    var player = document.getElementById('health');
    var hpBar = hp.style.width = playerobj.health + '%';
    if (playerobj.health <= 99) {
        playerobj.health++;
    }



    player.innerHTML = hpBar;
    console.log(playerobj.health)
}
var interval = setInterval(regen, 100)

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
