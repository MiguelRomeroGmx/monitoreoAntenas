var config = {
    apiKey: "AIzaSyCtObdc66qWY73dCoxeDwZV9UHHB8zQB3I",
    authDomain: "conectodosping.firebaseapp.com",
    databaseURL: "https://conectodosping.firebaseio.com",
    projectId: "conectodosping",
    storageBucket: "",
    messagingSenderId: "829429621487"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

var hora = "horas";
var contenido;
var agregar;
var celda;
var datos = 50;


for (let index = 0; index < datos; index++) {
   console.log(index);
   

     var x = document.getElementById("tabla");
     var fila = tabla.insertRow(index);

     var celda1 = fila.insertCell(0);
     var celda2 = fila.insertCell(1);
     var celda3 = fila.insertCell(2);

    celda1.innerHTML = index;
    celda2.innerHTML = index;
    celda3.innerHTML = index;
     

    
}











