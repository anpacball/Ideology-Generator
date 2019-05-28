function procent(value) {
  return ~~((value) * 100) + "%";
}

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 38:
      document.getElementById("tid").value--;
      calc();
      break;
    case 40:
      document.getElementById("tid").value++;
      calc();
      break;
    case 13:
      calc();
      break;
    default:
      //alert(event.keyCode);
  }
};

function calc() {
  var bokens_langd = document.getElementById("sidor").value;
  var sidor_pd = document.getElementById("tid").value;// Sidor per dag.
  if (sidor_pd <= 1) {
    document.getElementById("tid").value++;
    if (document.getElementById("tid").value <= 1) {
      var processor = setInterval(function()
      {
        if (document.getElementById("tid").value <= 1) {
          document.getElementById("tid").value++;
        }
        else {
          clearInterval(processor);
          calc();
          return;
        }
      }, 100);
    }
    return;
  }
  const lantid = 30;
  const omlan = 6;
  const finetune = 0.85;
  var output = "Det kommer att ta dig ";

  var speed = bokens_langd / sidor_pd;
  output += speed + " dagar att läsa boken vid denna hastighet{DOT}<br>"
  var gardet = speed / lantid;
  if ((gardet / omlan) >= finetune) { output += "[!] Du kommer inte hinna, det kommer kräva " + gardet + " lån{DOT}"; }
  else { output += "Detta betyder att du kommer hinna använda " + gardet + " lån{DOT}"; }
  output += "<br>";

  var table = '<table class="table"><thead class="thead-light"><tr><th scope="col">#</th>';
  table += '<th scope="col">' + 'Dagar' + '</th>';
  table += '<th scope="col">' + 'Timmar' + '</th>';
  table += '<th scope="col">' + 'Lån (%)' + '</th>';
  table += '<th scope="col">' + 'Med omlån (%)' + '</th></tr></thead><tbody>';

  var og = sidor_pd;
  sidor_pd -= 2;
  var x = 0;
  speed = -1;
  while (x < 5) {

    var finer = (bokens_langd / sidor_pd / lantid / omlan);
    var speed = bokens_langd / sidor_pd;
    var dclass = "";

    if (speed >= 29) {
      if (finer >= finetune) {
        if (sidor_pd == og) { dclass += 'class="table-primary" id="txt_danger"'; }
        else { dclass += 'class="table-danger"'; }
      }
      else {
        if (sidor_pd == og) { dclass += 'class="table-primary" id="txt_warning"'; }
        else { dclass += 'class="table-warning"'; }
      }
    }
    else {
      if (sidor_pd == og) { dclass += 'class="table-primary" id="txt_soft"'; }
      else { dclass += 'class="table-success"'; }
    }

    table += '<tr ' + dclass + '><th scope="row">' + sidor_pd + '</th><td>';

    table += Math.floor(speed) + '</td><td>';
    table += Math.round((speed % 1) * 24) + '</td><td>';
    table += procent(bokens_langd / sidor_pd / lantid) + '</td><td>';
    table += procent(finer) + '</td></tr>';
    sidor_pd++;
    x++;
  }
  table += '</tbody></table>';

  output +=  "<br>" + table;
  output = output.replace(/\./g, ",");
  output = output.replace(/{DOT}/g, ".");


  document.getElementById("result_box").innerHTML = output;
}
