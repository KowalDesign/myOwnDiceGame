let randomGenerator = Math.floor(Math.random() * 6) + 1;
let changeImg = "images/dice" + randomGenerator + ".png";
document.querySelectorAll('img')[1].setAttribute('src', changeImg);

let randomGenerator1 = Math.floor(Math.random() * 6) + 1;
let changeImg1 = "images/dice" + randomGenerator1 + ".png";
document.querySelectorAll('img')[2].setAttribute('src', changeImg1);

if (randomGenerator > randomGenerator1) {
    document.querySelector('.refresh').innerHTML = 'Player 1 Won';
} else if (randomGenerator < randomGenerator1) {
    document.querySelector('.refresh').innerHTML = 'Player 2 WON';
} else {
    document.querySelector('.refresh').innerHTML = 'DRAW';
}
