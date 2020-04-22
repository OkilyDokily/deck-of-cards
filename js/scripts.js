var suits = ["clubs","diamonds","hearts","spades"];
var highCards = ["jack", "queen", "king"]
var ace = ["ace"];
var numbers = Array.from(Array(11).keys()).slice(2);
console.log(numbers)
function go(){
  var cards = [];
  var sequence = ace.concat(numbers).concat(highCards);
  console.log(sequence);
  suits.forEach(function(suit){
    sequence.forEach(function(cardValue){
      var string = cardValue + " of " + suit;
      cards.push(string); 
    });
  })
  return cards;
}


$(document).ready(function(){
  go().forEach(function(card){
    $("ul").append("<li>" + card +"</li>")
  });
});