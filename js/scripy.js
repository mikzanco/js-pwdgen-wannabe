
const nomeUtente = prompt('Come ti chiami?');
const cognomeUtente = prompt('Qual è il tuo cognome?');
const anniUtente = prompt('Quanti anni hai?');


output = nomeUtente + cognomeUtente + anniUtente;


document.getElementById('user').innerHTML = output;
