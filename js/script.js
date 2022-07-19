let operacion = 0
let numA = 0
let numB = 0


function start() {
  alert('Que operación querés realizar?')
  operacion = prompt('1_Suma\n2_Resta\n3_Multiplicación\n4_División\n5_Conversion dolar');
  if (operacion == 1) {
    sumar()
  }
  if (operacion == 2) {
    restar()
  }
  if (operacion == 3) {
    multiplicar()
  }
  if (operacion == 4) {
    dividir()
  }
  if (operacion == 5) {
    conversionDolar()
  }

}

function sumar() {
  alert('Qué números querés sumar?')
  numA = parseFloat(prompt('Primer Número'))
  numB = parseFloat(prompt('Segundo Número'))
  suma = numA + numB;
  volver = prompt('El resultado es ' + suma + ' Quiere realizar otra opción?\n1_Si\n2_No');
  if (volver == 1) {
    start()
  } else if (volver == 2) {
    alert('Vuelva Prontos')
  }
}

function restar() {
  alert('Qué números querés restar?')
  numA = parseFloat(prompt('Primer Número'))
  numB = parseFloat(prompt('Restado por...'))
  resta = numA - numB;
  volver = prompt('El resultado es ' + resta + ' Quiere realizar otra opción?\n1_Si\n2_No');
  if (volver == 1) {
    start()
  }
  if (volver == 2) {
    alert('Vuelva Prontos')
  }
  if (volver !== 1 && volver !== 2) {
    alert('dale elegi uno')
  }
}

function multiplicar() {
  alert('Qué números querés multiplicar?')
  numA = parseFloat(prompt('Primer Número'))
  numB = parseFloat(prompt('Multiplicado por...'))
  multi = numA * numB;
  volver = prompt('El resultado es ' + multi + ' Quiere realizar otra opción?\n1_Si\n2_No');
  if (volver == 1) {
    start()
  } else if (volver == 2) {
    alert('Vuelva Prontos')
  }
}

function dividir() {
  alert('Qué números querés dividir?')
  numA = parseFloat(prompt('Primer Número'))
  numB = parseFloat(prompt('Dividido por...'))
  division = numA / numB;
  volver = prompt('El resultado es ' + division + ' Quiere realizar otra opción?\n1_Si\n2_No');
  if (volver == 1) {
    start()
  } else if (volver == 2) {
    alert('Vuelva Prontos')
  }
}

function pesoDolar() {
  numA = parseFloat(prompt('¿Cuantos pesos argentinos tenes?\n1 Dolar = $250'));
  pesoADolar = numA / 250;
  volver = prompt(numA + ' pesos argentinos equivalen a ' + pesoADolar + ' dolares\nQuiere realizar otra opción?\n1_Si\n2_No');
  if (volver == 1) {
    start()
  } else if (volver == 2) {
    alert('Vuelva Prontos')
  }
}

function dolarPeso() {
  numA = parseFloat(prompt('¿Cuantos dolares tenes?\n1 Dolar = 250ARS'));
  dolarAPeso = (numA * 250);
  volver = prompt(numA + ' dolares equivalen a ' + dolarAPeso + ' pesos argentinos\nQuiere realizar otra opción?\n1_Si\n2_No');
  if (volver == 1) {
    start()
  } else if (volver == 2) {
    alert('Vuelva Prontos')
  }
}

function conversionDolar() {
  conversion = prompt('Qué conversión querés hacer?\n1_Peso argentino a dolar\n2_Dolar a peso argentino')
  if (conversion == 1) {
    pesoDolar();
  } else if (conversion == 2) {
    dolarPeso();
  }
}

alert('Holuu, soy un intento de calculadora')
start()