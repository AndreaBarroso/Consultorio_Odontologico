document.getElementById("botoncito").onclick=agregarFila(6);


function agregarFila(colCount) {
    var table = document.getElementById('tablita');
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    for (var i = 0; i < colCount; i++) {

        row.insertCell(i);
    }
}

function myCreateFunction()
{
    var paciente = document.getElementById("pacienteSelec").value;
    var profesional = document.getElementById("profesionalSelec").value;
    var fecha = document.getElementById("fechaSelec").value;
    var motivo = document.getElementById("motivoSelec").value;
var table = document.getElementById("tablita");
  {
  var row = table.insertRow(4);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  cell1.innerHTML = "1"+ profesional;
  cell2.innerHTML = "2"+ profesional;
  cell3.innerHTML = "3"+ paciente;
  cell4.innerHTML = "4"+ paciente;
  cell5.innerHTML = "5"+ fecha;
  cell6.innerHTML = "6"+ motivo;
  }
}

function confirmarCambios(){
    var paciente = document.getElementById("pacienteSelec").value;
    var profesional = document.getElementById("profesionalSelec").value;
    var fecha = document.getElementById("fechaSelec").value;
    var motivo = document.getElementById("motivoSelec").value;
    var tabla = document.getElementById('tabla');
    tabla.innerHTML += `
        <tr>
          <th scope="row">4</th>
          <td>`+profesional+`</td>
          <td>`+profesional+`</td>
          <td>`+paciente+`</td>
          <td>`+paciente+`</td>
          <td>`+fecha+`</td>
          <td>`+motivo+`</td>
        </tr>
    `;
    //document.getElementById("tablita").insertRow(-1).innerHTML = '<td>'+paciente+'</td><td>'+paciente+'</td><td>'+profesional+'</td><td>'+profesional+'</td><td>'+fecha+'</td><td>'+motivo+'</td>';
    //document.getElementById("tablita").insertRow(-1).innerHTML = '<td>Hola</td><td>Hola</td><td>Hola</td><td>Hola</td><td>Hola</td><td>Hola</td>';
}