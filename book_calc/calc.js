function procent(value) {
  return ~~((value) * 100) + "%";
}

function calc() {
  var bokens_langd = document.getElementById("sidor").value;
  var sidor_pd = document.getElementById("tid").value;// Sidor per dag.
  if (sidor_pd <= 1) {
    alert("För dum fråga. Ha ett högre \"Sido Per Dag\"-värde än 1.");
    return;
  }
  const lantid = 30;
  const omlan = 6;
  const finetune = 0.85;
  var det_finns_tid = false;
  var output = "Det kommer att ta dig ";

  var speed = bokens_langd / sidor_pd;
  output += speed + " dagar att läsa boken vid denna hastighet{DOT}<br>"
  var gardet = speed / lantid;
  if ((gardet / omlan) >= finetune) {
    output += "[!] Du kommer inte hinna, det kommer kräva " + gardet + " omlån{DOT}";
    det_finns_tid = false;
  }
  else {
    output += "Detta betyder att du kommer hinna använda " + gardet + " omlån{DOT}";
    det_finns_tid = true;
  }
  output += "<br>";

  var table = '<table class="table"><thead class="thead-light"><tr><th scope="col">#</th>';
  table += '<th scope="col">' + 'Dagar' + '</th>';
  table += '<th scope="col">' + 'Lån (%)' + '</th>';
  table += '<th scope="col">' + 'Med omlån (%)' + '</th></tr></thead><tbody>';

  var og = sidor_pd;
  sidor_pd -= 2;
  var x = 0;
  while (x < 5) {

    var finer = (bokens_langd / sidor_pd / lantid / omlan);
    var pct = procent(finer);
    if (sidor_pd == og) {
      if (det_finns_tid) {
        table += '<tr class="table-primary"><th scope="row">' + sidor_pd + '</th><td>';
      } else {
        table += '<tr class="table-warning"><th scope="row">' + sidor_pd + '</th><td>';
      }
    }
    else {
      if (finer >= finetune) {
        table += '<tr class="table-danger"><th scope="row">' + sidor_pd + '</th><td>';
      }
      else {
        table += '<tr class="table-success"><th scope="row">' + sidor_pd + '</th><td>';
      }
    }
    var sidor_ = bokens_langd / sidor_pd;
    if (Number.isInteger(sidor_)) {
      table += sidor_ + '</td><td>';
    }
    else {
      table += sidor_.toFixed(3) + '</td><td>';
    }
    table += procent(bokens_langd / sidor_pd / lantid) + '</td><td>';
    table += pct + '</td></tr>';
    sidor_pd++;
    x++;
  }
  table += '</tbody></table>';

  output +=  "<br>" + table;
  output = output.replace(/\./g, ",");
  output = output.replace(/{DOT}/g, ".");


  document.getElementById("result_box").innerHTML = output;
}
