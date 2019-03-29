function userName(){
    console.log("click")
    let userN= document.getElementById('inputName').value;
  console.log(userN);
  let hello = document.getElementById('saludo');
  hello.innerText = 'Hola : '+userN;
 document.getElementById("helou").style.display = "block";
  document.getElementById("welcome").style.display = "none";
}
// Guarda el input y lo coloca junto al hola.
function start(){
    document.getElementById("helou").style.display = "none";
    document.getElementById("questions").style.display = "block";
    document.getElementById("welcome").style.display = "none";
    }
function finish(){
let resultado = [];
let test = document.getElementById("answerThree").value;
console.log(test);
if (test=== "Don Ramón"){
resultado.push(test);
console.log(resultado);
let questionZ = resultado[0];
 console.log("aqui", questionZ);
}
let resultado2 = [];
let test2 = document.getElementById("answerSix").value;
console.log(test2);
if (test2=== "71"){
resultado2.push(test2);
console.log(resultado2);
}
let resultado3 = [];
let test3 = document.getElementById("answerEight").value;
console.log(test3);
if (test3=== "Cállate"){
resultado3.push(test3);
console.log(resultado3);
}
//document.write("Ñañaña", questionZ);

let questionPoints = ''; 
if (questions === 'Don Ramón, 71, Cállate') {
  questionOnePoints = 1;
}
else {
  questionPoints = 0;
}
let correctAnswers = questionPoints;
let acierto = document.getElementById('aciertos');
  acierto.innerText = 'Acertaste : '+correctAnswers;

document.getElementById("helou").style.display = "none";
document.getElementById("questions").style.display = "none";
document.getElementById("welcome").style.display = "none";
 document.getElementById("results").style.display = "block";
    }
     