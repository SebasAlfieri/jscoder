saldo = "0"

alert('¡Buenas! Bienvenido al kiosquito');
alert('¿Qué necesita?');

entro = prompt('1_Buenas, pasaba a comprar. \n2_Estaba mirando nomas.');
if (entro == '1') {
  alert('bienvenido')
} else if (entro == '2') {
  alert('Bueno, haga tranquilo')

  while (entro != '1')
    entro = prompt('Ya terminaste de pensar? \n\n1_Si :) \n2_Bancame un poquito más.')
}

if (entro == '1') {
  saldo = parseFloat(prompt('Cuanto dinero tenes?'))
  console.log(saldo)
}

while (saldo >= "0") {
  if (saldo < "10"){
    alert('No te alcanza para nada de lo que vendo. Nos vemos!')
    break
  }
  else if (saldo >= "10")
  (eleccion = prompt('Bueno, tengo $' + saldo + ' asi que voy a llevar... \n\n1_Unas Don Satur $180\n2_Caramelos por $50\n3_Un chicle $10\n4_Una botella de agua $70\n5_Una Pepsi $140\n6_Todo el kiosco $40.000\n7_Me voy'));
  console.log(saldo);
  if (eleccion > saldo) {
    alert('no te alcanza pa')
    break
  }
  else if (eleccion == '1') {
    eleccion = "180";
    if (eleccion > saldo)
      alert('no te alcanza pa')
    else {
      saldo = (saldo - eleccion);
      alert('Te quedan $' + saldo);
    }
  } else if (eleccion == '2') {
    eleccion = "50";
    if (eleccion > saldo)
      alert('No te alcanza pa')
    else {
      saldo = (saldo - eleccion);
      alert('Te quedan $' + saldo);
    }
  } else if (eleccion == '3') {
    eleccion = "10";
    if (eleccion > saldo)
      alert('No te alcanza pa')
    else {
      saldo = (saldo - eleccion);
      alert('Te quedan $' + saldo);
    }
  } else if (eleccion == '4') {
    eleccion = "70";
    if (eleccion > saldo)
      alert('No te alcanza pa')
    else {
      saldo = (saldo - eleccion);
      alert('Te quedan $' + saldo);
    }
  } else if (eleccion == '5') {
    eleccion = "140";
    if (eleccion > saldo)
      alert('No te alcanza pa')
    else {
      saldo = (saldo - eleccion);
      alert('Te quedan $' + saldo);
    }
  } else if (eleccion == '6') {
    eleccion = "40000";
    if (eleccion > saldo)
      alert('No te alcanza pa')
    else {
      saldo = (saldo - eleccion);
      alert('Familiaa, hoy se comee')
      alert('Te quedan $' + saldo);
    }
  } else if (eleccion == '7') {
    alert('Buenas tardes! Nos vemos')
    break
  }
}

