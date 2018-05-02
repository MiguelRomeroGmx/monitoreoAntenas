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


var hoy = document.getElementById("hoy");  
var numDesconexion = document.getElementById("numDesconexion");

var hora = "horas";
var contenido;
var agregar;
var celda;
var datos = 50;
var datosRec;
var datosDesc;

var fecha = new Date();
  var mes = fecha.getMonth() + 1;
  if (mes < 10) {
      mes = "0" + mes;
  }
  var dias = fecha.getDate();
  if (dias < 10) {
      dias = "0" + dias;
  }
  dia = dias + "-" + mes + "-" + fecha.getFullYear();

  hoy.innerHTML = dia;
  var desconexiones = firebase.database().ref().child("torre_1/desconexion/" + dia + "/contador");

  desconexiones.on("value", function (snaptshot) {
    desconexiones = snaptshot.val();
    numDesconexion.innerHTML = desconexiones;

    for (let index = 0; index < desconexiones; index++) {
        console.log(index);




     var x = document.getElementById("tabla");
     var fila = tabla.insertRow(index);

     var celda1 = fila.insertCell(0);
     var celda2 = fila.insertCell(1);
     var celda3 = fila.insertCell(2);
    
     var posicion = index + 1;
        var dato1 = firebase.database().ref().child("torre_1/desconexion/" + dia + "/" + posicion ); 
    
    dato1.on("value", function (snaptshot) {
       dato1 = snaptshot.val();
       console.log(dato1);
       
    //    datosDesc[posicion]= dato1;
       celda1.innerHTML = dato1; 
    });

    var dato2 = firebase.database().ref().child("torre_1/reconexion/" + dia + "/" + posicion ); 
    
    dato2.on("value", function (snaptshot) {
       dato2 = snaptshot.val();
    //    console.log(dato2);
    //    datosRec[posicion] = dato2
       celda2.innerHTML = dato2;
    });

    
    // console.log(dato1);
    
    // celda1.innerHTML = dato1; 
    // celda2.innerHTML = dato2;
    celda3.innerHTML = index;
     

    
}




  });














