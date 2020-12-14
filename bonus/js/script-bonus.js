var pariDispari = prompt('pari o dispari?');

var number = parseInt(prompt('scegli un numero da 1 a 5'));

var computerNumber = Math.floor(Math.random() * 5) +1;

var total = number + computerNumber;

var text = document.getElementById('result');

if (!isNaN(pariDispari) || isNaN(number) || pariDispari.includes(' ')) {
  alert('Attenzione, uno o più valori inseriti sono errati. Riprova.');
} else {
  text.innerHTML = 'Il computer ha scelto ' + computerNumber;
  if ((total % 2 === 0 && pariDispari === 'pari') || (total % 2 !== 0 && pariDispari === 'dispari')) {
    text.innerHTML += '<br>Bravo, hai vinto!'
  } else if ((total % 2 === 0 && pariDispari === 'dispari') || (total % 2 !== 0 && pariDispari === 'pari')) {
    text.innerHTML += '<br>Mi dispiace, hai perso!'
  }
}
