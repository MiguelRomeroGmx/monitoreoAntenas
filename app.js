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
  var reconexion = document.getElementById("reconexion");
  var reconexion2 = document.getElementById("reconexion2");
  var totalDesconexion = document.getElementById("totalDesconexion");
  var totalDesconexion2 = document.getElementById("totalDesconexion2");

  var puntos;
  var puntos2;
  var control;
  var control2;
  var numDesconexion;
  var numReconexion;
  var numDesconexion2;
  var numReconexion2;
  var controlUltDesconexion;
  var controlUltDesconexion2;
  var dia;
  var estado1;
  var estado2;

  var mostrarPing = document.getElementById("mostrarPing");
  var datos = document.getElementById("datos");
  var mostrarPing2 = document.getElementById("mostrarPing2");
  var datos2 = document.getElementById("datos2");

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


  numDesconexion.on("value", function (snaptshot) {
      numDesconexion = snaptshot.val();
      totalDesconexion.innerHTML = numDesconexion;
      ultDesconexion = firebase.database().ref().child("torre_1/desconexion/" + dia + "/" + numDesconexion);
      
      ultDesconexion.on("value", function (snaptshot) {
        ultDesconexion = snaptshot.val();
        desconexion.innerHTML = ultDesconexion;
    });
  });

  numReconexion.on("value", function (snaptshot) {
      numReconexion = snaptshot.val();
      ultReconexion = firebase.database().ref().child("torre_1/reconexion/" + dia + "/" + numReconexion);

      ultReconexion.on("value", function (snaptshot) {
          ultReconexion = snaptshot.val();
          reconexion.innerHTML = ultReconexion;
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




puntos = 0;
puntos2 = 0;


estado1 = firebase.database().ref().child("torre_1/antena");

estado1.on("value", function (snaptshot) {
    estado1 = snaptshot.val();
    console.log(estado1);
    
});
