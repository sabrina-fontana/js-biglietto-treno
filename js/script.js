var kmNumber = parseInt(prompt('Quanti chilometri vuoi percorrere?'));

var age = parseInt(prompt('Quanti anni hai?'));

var ticketPrice = kmNumber * 0.21;

var text = document.getElementById('ticket-price');

if (isNaN(kmNumber) || isNaN(age)) {
  alert('Uno o più valori inseriti non sono corretti. Riprova.');
} else {
  if (age < 18) {
    text.innerHTML = ('Hai diritto ad uno sconto del 20%<br>Il prezzo del tuo biglietto è di € ' + (ticketPrice * 0.8).toFixed(2))
  } else if (age > 65) {
    text.innerHTML = ('Hai diritto ad uno sconto del 40%<br>Il prezzo del tuo biglietto è di € ' + (ticketPrice * 0.6).toFixed(2))
  } else {
    text.innerHTML = ('Il prezzo del tuo biglietto è di € ' + ticketPrice.toFixed(2))
  }
}
