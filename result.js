var ideologies = ["Queer", "Collapsitarian",
"Lumpenproletariat", "Circus", "Nationalist", "Voluntary", "Survival", "Post-Civ", "Transhuman", "Transgender", "Queer",
"Gay", "Anarchist", "Post-Scarcity", "Individualist", "Market-", "Right-wing", "Left-wing", "Facistic", "HomoSexual", "Nigger",
"Mafia", "Hedonist", "Egoistic", "Bolshevik", "Illegalist", "Accelerationist", "Darwinian", "Syndicalistic",
"Neo-", "Post-", "Anti-", "Ultra-", "Judeo-", "Big-", "Woke", "Based", "Faggot-like", "Satanist",
"Christian", "Islamist", "Jewish", "Ultra-gay", "Marxian", "Leninistic", "Dystopian Realist",
"LeftCommunist", "Jucheist", "Althusserian", "Lacanian", "Zizekaian", "Foucaultian", "Dimmatarian", "Zionist", "Juden", "LARPer",
"Redundant", "Social-", "Democratic", "Anarcho-", "Leftism", "Workerist", "Chomskyan", "Cowboyist",
"Stirnerite-", "SocialDemocratic", "\"All tax is theft\"-ist", "Agorist", "Conservetive", "Liberal", "Reactionary", "Progressive",
"Masochistic", "Anti-Police", "Trump-supporting", "Globalist", "Paleo-", "Soviet", "American-", "Scandinavian-",
"Monarchist", "Dictatorial", "Imperialist", "Authoritarian", "State-Enforced", "Paganist", "ClassicalLiberal", "Selfish",
"Creatonist", "Egalitarian", "Constitutionalist", "Royalist", "Counter-Economical", "Government", "Ethno-", "Stateist",
"Post-left", "Bureaucratic", "Platonism", "Pacifist", "Militant", "Revolutionary", "Insurrectionist", "Third-Worldist",
"Gandhian", "Esoteric"];


var endings = ["Strasserist", "Maoist", "Stalinist", "Libertarian", "Communist", "Socialist", "Marxist", "Minarchist",
"SocialDemocrat", "Mutualist", "Objectivist", "Syndicalist", "Capitalist", "ClassicalLiberal", "Leninist", "Hoaxaist",
"PolPotist", "Titoist", "Facist", "Nazi", "Moderate", "Egoist", "Voluntaryism", "Black Liberationist", "Neo-Abolitionist",
"Putinist"];

var state = ["Extreme", "Moderate", "Agnostic", "Mild", "Dystopian", "Ultra Extreme", "Radical"];

function getx() {
  return Math.floor(Math.random() * 100) + 1;
}
function gety() {
  //return Math.floor(Math.random() * (ideologies.length - 1)) + 1;
  //return Math.floor(Math.random() * ideologies.length) + 1;
  return Math.floor(Math.random() * ideologies.length);
}
function getz() {
  return Math.floor(Math.random() * endings.length);
}


function result() {
  var res = document.getElementById("res");
  var all_html = "";

  all_html += state[Math.floor(Math.random() * state.length)] + " ";


  var x = getx();
  var y = gety();
  var used = [];
  for (var i = 0; i < x; i++) {
    var already_used = false;
    var sep = " ";
    // TODO: Add used and make it check if ideology is already in string.
    
    if (!already_used) {
      if (ideologies[y].slice(-1) == "-") { sep = ""; }
      all_html = all_html + ideologies[y] + sep;
      used.push(i);
      x = getx();
      y = gety();
    }
  }

  all_html = all_html + endings[getz()];

  if (Math.floor(Math.random() * 20) == 3) {
    var countries = ["Irish", "Chinese", "Indian", "Swedish", "Finnish", "German", "Russian", "Austrailian", "Italian"];
    var country = countries[Math.floor(Math.random() * countries.length)];
    all_html = all_html + " With " + country + " Characteristics!"
  }

  res.innerHTML = "<h3>" + all_html + "</h3>";
}