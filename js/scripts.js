var suits = ["clubs","diamonds","hearts","spades"];
var highCards = ["jack", "queen", "king"]
var ace = "ace"
var numbers = Array.from(Array(11).keys()).slice(2);

function go(){
  var cards = [];
  var sequence = ace.concat(number).concat(highCards);
  suits.forEach(function(suit){
    sequence.forEach(function(cardValue){

    });
  })
  return cards;
}


$(document).ready(function(){
  go().forEach(function(card){
    $()
  });
});