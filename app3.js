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
var numDesconexionDetalle = document.getElementById("numDesconexionDetalle");
var totalDesconexionDetalle = document.getElementById("totalDesconexionDetalle");
var horaConsulta = document.getElementById("horaConsulta");
var oilCanvas = document.getElementById("oilChart");
var seg = document.getElementById("seg");
var min = document.getElementById("min");
var hrs = document.getElementById("hrs");
var control;

var hora = "horas";
var contenido;
var agregar;
var celda;
var datos = 50;
var datosRec;
var datosDesc;
var total1 = new Array();
var total2 = new Array();;
var tiempoTotalFuera = 0;
var segundosTotales;

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

  var fecha = new Date();
    var horas = fecha.getHours();
    if (horas < 10) {
        horas = "0" + horas;
    }
    var minutos = fecha.getMinutes();
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    var segundos = fecha.getSeconds();
    if (segundos < 10) {
        segundos = "0" + segundos;
    }
    hora = horas + ":" + minutos + ":" + segundos;
    horaConsulta.innerHTML = hora;

    segundosTotales = (horas * 3600) + (minutos * 60) + segundos;
    console.log("Segundos Totales: " + segundosTotales);
    

  var desconexiones = firebase.database().ref().child("torre_2/desconexion/" + dia + "/contador");

  desconexiones.on("value", function (snaptshot) {
    desconexiones = snaptshot.val();

    numDesconexionDetalle.innerHTML = desconexiones;
    // numDesconexionDetalle.innerHTML = numDesconexion;
    // desconexiones = numDesconexion;

    if (control == 1) {
        
        control = 1;
    }
    else{

   
// desconexiones
    for (let index = 0; index < desconexiones; index++) {
        // console.log(index);
        control = 1;
        var posicion = index + 1;
        var dato1 = firebase.database().ref().child("torre_2/desconexion/" + dia + "/" + posicion ); 
    
        dato1.on("value", function (snaptshot) {
            dato1 = snaptshot.val();
            datosDesconexion(dato1, index);
            console.log(dato1);
            console.log(posicion);
            var tabla = document.getElementById("tabla");
            var fila = tabla.insertRow(index);
            var celda1 = fila.insertCell(0);
            celda1.innerHTML = total1[index]; 

        });

        var dato2 = firebase.database().ref().child("torre_2/reconexion/" + dia + "/" + posicion ); 
    
        dato2.on("value", function (snaptshot) {
            dato2 = snaptshot.val();
            datosConexion(dato2, index);
            var tabla = document.getElementById("tabla2");
            var fila = tabla.insertRow(index);
            var celda2 = fila.insertCell(0);
            celda2.innerHTML = total2[index]; 

            var tabla3 = document.getElementById("tabla3");
            var fila3 = tabla3.insertRow(index);
            var celda3 = fila3.insertCell(0);
            var tiempoFuera = total2[index] - total2[index];
            

            var a = new Date("May 2, 2018 " +  total2[index]);
            var b = new Date("May 2, 2018 " +  total1[index]);
            var c = (a-b)/1000;
            console.log("tiempo Fuera: " + c);
            
            celda3.innerHTML = c + " seg"; 
            tiempoDesconectado(c);
        });
    }

 }


  });
  

var datosDesconexion = function (dato1, index) {
//    console.log("datos: " + dato1);
//    console.log("index: " + index);
   total1.push(dato1);
   console.log(total1);
   return;
   
};


var datosConexion = function (dato2, index) {
    // console.log("datos2: " + dato2);
    // console.log("index: " + index);
    total2.push(dato2);
    console.log(total2);
    
   return;
};

var tiempoDesconectado = function (c) {
    console.log(c);
    tiempoTotalFuera = tiempoTotalFuera + c;
    totalDesconexionDetalle.innerHTML = tiempoTotalFuera + " seg";
    seg.innerHTML = tiempoTotalFuera + " seg";
    var tMin = (tiempoTotalFuera/60);
    tMin = tMin.toFixed(2);
    min.innerHTML = tMin + " min";
    var tHoras = tiempoTotalFuera / 3600;
    tHoras = tHoras.toFixed(2);
    hrs.innerHTML = tHoras + " hrs";
    graficar();
    return;
};


var graficar = function () {
    
var x = (100 * (tiempoTotalFuera)/(segundosTotales));
x = x.toFixed(2);
console.log("porcentaje x: " + x);

var y = 100 - x;
y = y.toFixed(2);

if (y > 97) {
    $("#ok").removeClass("gris"); 
    $("#advertencia").addClass("gris"); 
    $("#error").addClass("gris"); 
}

if (y > 80 && y < 97) {
    $("#advertencia").removeClass("gris"); 
    $("#error").addClass("gris"); 
    $("#ok").addClass("gris"); 
}

if (y < 80) {
    $("#error").removeClass("gris"); 
    $("#ok").addClass("gris"); 
    $("#advertencia").addClass("gris"); 
}


var oilData = {
    labels: [
        "Conectado: " + y +"%",
        "Desconectado: " + x + "%",
    ],
    datasets: [
        {
            data: [y, x],
            backgroundColor: [
                "#FFA500",
                "#000000",
                // "#84FF63",
                // "#8463FF",
                // ""
            ],
            borderColor: "white",
            borderWidth: 1
        }]
};

var pieChart = new Chart(oilCanvas, {
  type: 'pie',
  data: oilData
});

}