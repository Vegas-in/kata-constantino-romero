const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
  // Put your code here
  return `"<p>${pregunta.titulo}</p>"`;

  
}

function imprimeTodasLasRespuestas(pregunta) {
  // Put your code here
  let resultado = "";
 for (let i = 0; i < pregunta.respuestas.length; i++) { 
  let respuestaUno = pregunta.respuestas[i];
  let respuestaDos = imprimeUnaRespuesta(respuestaUno)
  resultado = resultado + respuestaDos; //resultado += respuestaDos ------------------------------------------------------------- 
 }
 return resultado
 
}

function imprimeUnaRespuesta(respuesta) {
  // Put your code here
let labelUno = imprimeLabel(respuesta);
let inputUno = imprimeInput(respuesta);
let resultado = labelUno + inputUno;
return resultado;
}

function imprimeLabel(respuesta) {
  // Put your code here
  let label = `'<label for="${respuesta.id}">"${respuesta.label}"</label>'`;
  return label;
}

function imprimeInput(respuesta) {
  // Put your code here
  let input = `'<input type="radio" id="${respuesta.id}" name="${respuesta.name}" value="${respuesta.value}"/>'`;
  return input;
}

document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);