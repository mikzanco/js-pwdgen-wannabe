
const nomeUtente = prompt('Come ti chiami?');
const cognomeUtente = prompt('Qual è il tuo cognome?');
const colorUtente = prompt('Qual è il tuo colore preferito');


output = nomeUtente + cognomeUtente + colorUtente;



document.getElementById('user').innerHTML = output;

document.getElementById('firstName').innerHTML = nomeUtente;
document.getElementById('lastName').innerHTML = cognomeUtente;
document.getElementById('color').innerHTML = colorUtente;
