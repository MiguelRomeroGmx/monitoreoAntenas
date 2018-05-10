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

  var hora;
  var desconexion = document.getElementById("ultDesconexion");
  var desconexion2 = document.getElementById("ultDesconexion2");
  var desconexion3 = document.getElementById("ultDesconexion3");
  var reconexion = document.getElementById("reconexion");
  var reconexion2 = document.getElementById("reconexion2");
  var reconexion3 = document.getElementById("reconexion3");
  var totalDesconexion = document.getElementById("totalDesconexion");
  var totalDesconexion2 = document.getElementById("totalDesconexion2");
  var totalDesconexion3 = document.getElementById("totalDesconexion3");

  var puntos;
  var puntos2;
  var puntos3;
  var control;
  var control2;
  var control3;
  var numDesconexion;
  var numReconexion;
  var numDesconexion2;
  var numReconexion2;
  var numDesconexion3;
  var numReconexion3;
  var controlUltDesconexion;
  var controlUltDesconexion2;
  var controlUltDesconexion3;
  var dia;
  var estado1;
  var estado2;
  var estado3;

  var mostrarPing = document.getElementById("mostrarPing");
  var datos = document.getElementById("datos");
  var mostrarPing2 = document.getElementById("mostrarPing2");
  var datos2 = document.getElementById("datos2");
  var mostrarPing3 = document.getElementById("mostrarPing3");
  var datos3 = document.getElementById("datos3");

//   var ping = firebase.database().ref().child("torre_1/dato");
//   var ping2 = firebase.database().ref().child("torre_2/dato");

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

  numDesconexion = firebase.database().ref().child("torre_1/desconexion/" + dia + "/contador");
  numReconexion = firebase.database().ref().child("torre_1/reconexion/" + dia + "/contador");
  numDesconexion2 = firebase.database().ref().child("torre_2/desconexion/" + dia + "/contador");
  numReconexion2 = firebase.database().ref().child("torre_2/reconexion/" + dia + "/contador");
  numDesconexion3 = firebase.database().ref().child("torre_3/desconexion/" + dia + "/contador");
  numReconexion3 = firebase.database().ref().child("torre_3/reconexion/" + dia + "/contador");


  numDesconexion.on("value", function (snaptshot) {
      numDesconexion = snaptshot.val();
      if (numDesconexion != null) {
          
      
      totalDesconexion.innerHTML = numDesconexion;
      }
      else{
          totalDesconexion.innerHTML = 0;
      }
      ultDesconexion = firebase.database().ref().child("torre_1/desconexion/" + dia + "/" + numDesconexion);
      
      ultDesconexion.on("value", function (snaptshot) {
        ultDesconexion = snaptshot.val();
        if (ultDesconexion != null) {
        desconexion.innerHTML = ultDesconexion;
        }
        else{
            desconexion.innerHTML = "Sin desconexiones";
        }
    });
  });

  numReconexion.on("value", function (snaptshot) {
      numReconexion = snaptshot.val();
      ultReconexion = firebase.database().ref().child("torre_1/reconexion/" + dia + "/" + numReconexion);

      ultReconexion.on("value", function (snaptshot) {
          ultReconexion = snaptshot.val();
          if (ultReconexion != null) {
          reconexion.innerHTML = ultReconexion;
           }
           else{
               reconexion.innerHTML = "Sin Reconexion";
           }
      });
  });

  numDesconexion2.on("value", function (snaptshot) {
      numDesconexion2 = snaptshot.val();
      totalDesconexion2.innerHTML = numDesconexion2;
      ultDesconexion2 = firebase.database().ref().child("torre_2/desconexion/" + dia + "/" + numDesconexion2);

      ultDesconexion2.on("value", function (snaptshot) {
          ultDesconexion2 = snaptshot.val();
          desconexion2.innerHTML = ultDesconexion2;
      });

  });

  numReconexion2.on("value", function (snaptshot) {
      numReconexion2 = snaptshot.val();
      ultReconexion2 = firebase.database().ref().child("torre_2/reconexion/" + dia + "/" + numReconexion2);

      ultReconexion2.on("value", function (snaptshot) {
          ultReconexion2 = snaptshot.val();
          reconexion2.innerHTML = ultReconexion2;
      });
  });

numDesconexion3.on("value", function (snaptshot) {
      numDesconexion3 = snaptshot.val();
      totalDesconexion3.innerHTML = numDesconexion3;
      ultDesconexion3 = firebase.database().ref().child("torre_3/desconexion/" + dia + "/" + numDesconexion3);

      ultDesconexion3.on("value", function (snaptshot) {
          ultDesconexion3 = snaptshot.val();
          desconexion3.innerHTML = ultDesconexion3;
      });

  });

  numReconexion3.on("value", function (snaptshot) {
      numReconexion3 = snaptshot.val();
      ultReconexion3 = firebase.database().ref().child("torre_3/reconexion/" + dia + "/" + numReconexion3);

      ultReconexion3.on("value", function (snaptshot) {
          ultReconexion3 = snaptshot.val();
          reconexion3.innerHTML = ultReconexion3;
      });
  });


puntos = 0;
puntos2 = 0;
puntos3 = 0;


estado1 = firebase.database().ref().child("torre_1/antena");
estado2 = firebase.database().ref().child("torre_2/antena");
estado3 = firebase.database().ref().child("torre_3/antena");

estado1.on("value", function (snaptshot) {
    estado1 = snaptshot.val();
    console.log(estado1);
    mostrarPing.innerHTML = estado1;
});

estado2.on("value", function (snaptshot) {
    estado2 = snaptshot.val();
    console.log(estado2);
    mostrarPing2.innerHTML = estado2;
});

estado3.on("value", function (snaptshot) {
    estado3 = snaptshot.val();
    console.log(estado3);
    mostrarPing3.innerHTML = estado3;
});


function actualizaGrafico() {
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
    datos.innerHTML = hora;

    if (estado1 != "En Linea") {
        addData(myChart, hora, 0);
    }
    else {
        addData(myChart, hora, 1);
    }

    if (estado2 != "En Linea") {
        addData(myChart2, hora, 0);
    }
    else {
        addData(myChart2, hora, 1);
    }
    if (estado3 != "En Linea") {
        addData(myChart3, hora, 0);
    }
    else {
        addData(myChart3, hora, 1);
    }
}


var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Ping Conectodos',
            // data: [1, 1, 1, 0, 1, 0],
            data: [],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Torre 1 - Fibra Optica Paraiso'
        },
        scales: {
            yAxes: [{
                
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


var ctx = document.getElementById("myChart2").getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Ping Conectodos',
             data: [],
            //data: [],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Torre 2 - Fibra Optica Comalcalco'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


var ctx = document.getElementById("myChart3").getContext('2d');
var myChart3 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Ping Conectodos',
             data: [],
            //data: [],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Torre 3 - Nicolas Bravo'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



function addData(chart, label, data) {
    puntos++;
    // console.log(puntos);
    chart.data.labels.push(label);
    if (puntos > 50) {
        chart.data.labels.splice(0, 1);
    }
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
        if (puntos > 50) {
            dataset.data.splice(0, 1);
        }
    });
    if (puntos > 50) {
        puntos--;
    }
    chart.update();
}


function addData2(chart, label, data) {
    puntos2++;
    // console.log(puntos2);
    chart.data.labels.push(label);
    if (puntos2 > 50) {
        chart.data.labels.splice(0, 1);
    }
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
        if (puntos2 > 50) {
            dataset.data.splice(0, 1);
        }
    });
    if (puntos2 > 50) {
        puntos2--;
    }
    chart.update();
}

function addData3(chart, label, data) {
    puntos3++;
    // console.log(puntos2);
    chart.data.labels.push(label);
    if (puntos3 > 50) {
        chart.data.labels.splice(0, 1);
    }
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
        if (puntos3 > 50) {
            dataset.data.splice(0, 1);
        }
    });
    if (puntos3 > 50) {
        puntos3--;
    }
    chart.update();
}