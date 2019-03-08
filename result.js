var ideologies = ["Queer", "Collapsitarian", "Techno-", "Traditionalist", "Federalist", "Keynesian",
"Lumpenproletariat", "Circus", "Nationalist", "Voluntary", "Survival", "Post-Civ", "Transhuman", "Transgender",
"Gay", "Anarchist", "Post-Scarcity", "Individualist", "Market-", "Right-wing", "Left-wing", "Facistic", "HomoSexual", "Nigger",
"Mafia", "Hedonist", "Egoistic", "Bolshevik", "Illegalist", "Accelerationist", "Darwinian", "Syndicalistic",
"Neo-", "Post-", "Anti-", "Ultra-", "Judeo-", "Big-", "Woke", "Based", "Faggot-like", "Satanist",
"Christian", "Islamist", "Jewish", "Ultra-gay", "Marxian", "Leninistic", "DystopianRealist",
"LeftCommunist", "Jucheist", "Althusserian", "Lacanian", "Zizekaian", "Foucaultian", "Dimmatarian", "Zionist", "Juden-", "LARPer",
"Redundant", "\"Open-Source\"-ist", "Social-", "Democratic", "Anarcho-", "Leftism", "Workerist", "Chomskyan", "Cowboyist",
"Stirnerite-", "SocialDemocratic", "\"All tax is theft\"-ist", "Agorist", "Conservetive", "Liberal", "Reactionary", "Progressive",
"Masochistic", "Anti-Police", "Trump-supporting", "Globalist", "Paleo-", "Soviet", "American-", "Scandinavian-",
"Dictatorial","Clerical", "Imperialist", "Authoritarian", "State-Enforced", "Paganist", "Selfish",
"Creatonist", "Egalitarian", "Constitutionalist", "Counter-Economical", "Government", "Ethno-", "Stateist",
"Post-left", "Bureaucratic", "Platonism", "Pacifist", "Militant", "Revolutionary", "Insurrectionist", "Third-Worldist",
"Gandhian", "Esoteric", "Absolute-", "Orthodox", "Cyber-", "Situationist", "Öcalanist-", "Crypto-", "FreeMarket",
"Reinfeldtist-", "Francoist", "Brezjnevist", "Unorthodoxical-", "Collectivist", "Kurdish", "Arab", "Isreali", "French",
"Equatorial", "Lobbyist-", "Veganism", "Vegetarianism", "Hegalian", "Engelian", "Merkelist", "Pinochetian-"];


var endings = ["Strasserist", "Maoist", "Stalinist", "Libertarian", "Communist", "Socialist", "Marxist", "Minarchist",
"SocialDemocrat", "Mutualist", "Objectivist", "Syndicalist", "Capitalist", "ClassicalLiberal", "Leninist", "Hoaxaist",
"PolPotist", "Titoist", "Facist", "Nazi", "Moderate", "Egoist", "Voluntaryism", "Black Liberationist", "Neo-Abolitionist",
"Putinist", "Feralist", "Laissez-Faire Capitalist", "Royalist", "Monarchist", "Posadist", "Trotskyism", "Erdoganism",
"Tumblrist", "Populist", "Thatcherite"];

var state = ["Extreme", "Moderate", "Agnostic", "Mild", "Dystopian", "Ultra Extreme", "Radical", "Insanly Radical"];

console.log("With " + ((ideologies.length + 1) + (endings.length + 1) + (state.length + 1)) + " Ideologies!");

function getx() {
  return Math.floor(Math.random() * (ideologies.length - 1));
}
function gety(xx = ideologies) {
  return Math.floor(Math.random() * xx.length);
}
var used = [];
var word_counter = 0;
function check(x) {
  for (var i = 0; i < used.length; i++) {
    if (used[i] == x) {
      return true;
    }
  }
  return false;
}

function result() {
  //console.log("---------------------------------------");
  var res = document.getElementById("res");
  var all_html = "";

  all_html += state[Math.floor(Math.random() * state.length)] + " ";


  var x = getx();
  var y = gety();

  for (var i = 0; i < x; i++) {
    var already_used = check(y);
    word_counter += 1;
    var sep = " ";

    if (!already_used) {
      if (ideologies[y].slice(-1) == "-") { sep = ""; }
      all_html = all_html + ideologies[y] + sep;
      used.push(y);
      y = gety();
    }
  }

  all_html = all_html + endings[gety(endings)];


  if (Math.floor(Math.random() * 100) == 3) {
    var board = ["/pol/", "/g/", "/lit/", "/b/", "/v/", "/h/", "/k/"];
    all_html += " From " + board[Math.floor(Math.random() * board.length)];
  }

  if (Math.floor(Math.random() * 20) == 3) {
    var countries = ["Irish", "Chinese", "Indian", "Swedish", "Finnish", "German", "Russian", "Austrailian", "Italian"];
    var country = countries[Math.floor(Math.random() * countries.length)];
    all_html = all_html + " With " + country + " Characteristics!"
  }
  used = [];
  word_counter = 0;
/*var verifier = all_html.split(" ");
  for (var i = 0; i < verifier.length; i++) {
    if ((all_html.split(verifier[i]).length - 1) > 1) {
      if (verifier[i] != "is") {console.log("Double: " + verifier[i]);}
    }
  }*/
  res.innerHTML = "<h3>" + all_html + "</h3>";
}
