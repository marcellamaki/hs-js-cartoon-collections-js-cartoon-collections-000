var dwarves = [];

function dwarfRollCall (dwarves) {
  if(dwarves.length === 0) {
    return "No dwarves are here yet!";
  } else {
  var line = []
    var i = -1;
    var spot = i + 2;
      do{line.push(spot + ". " + dwarves.shift(i) + " ");
      i += 1;
      spot = spot +1;
    } while (i <= (dwarves.length));
  return line.join("");
}
}


function summonCaptainPlanet(planeteerCalls){
  var calls = []
  var i = 0;
  while (i < planeteerCalls.length){
  calls.push(planeteerCalls.toUpperCase + "!");
  i = i +1; }
  return calls;
}


function longPlaneteerCalls(words) {
for(var i = 0; i < words.length; i ++)
  if(words[i].length <= 4 ){
    return false
  } else {
    return true}
  }


  function findTheCheese (foods, cheese) {
    var cheese = ["cheddar", "gouda", "camembert"];
    for(var i = 0; i < cheese.length; i++){
       if(foods.includes(cheese[i])){
         return cheese[i];
    }else{
            return "no cheese!";
  }
}
}
