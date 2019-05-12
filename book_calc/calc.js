function calc() {
  var bokens_langd = document.getElementById("sidor").value;
  var sidor_pd = document.getElementById("tid").value;// Sidor per dag.
  const lantid = 30;
  const omlan = 6;
  const finetune = 0.9;
  var output = "Det kommer att ta dig ";

  var speed = bokens_langd / sidor_pd;
  output += speed + " dagar att läsa boken vid denna hastighet.<br>"
  var gardet = speed / lantid;
  if ((gardet / omlan) >= finetune) {
    output += "[!] Du kommer inte hinna, du har " + gardet + " omlån.";
  }
  else {
    output += "Detta betyder att du kommer hinna med " + gardet + " omlån.";
  }

  document.getElementById("result_box").innerHTML = output;
}
