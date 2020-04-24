var suits = ["clubs","diamonds","hearts","spades"];
var highCards = ["jack", "queen", "king"]
var ace = ["ace"];
var numbers = Array.from(Array(11).keys()).slice(2);

function go(){
  var cards = [];
  var sequence = ace.concat(numbers).concat(highCards);

  var cards =suits.reduce(function(accumulator,suitValue){
   var OneSequence = sequence.reduce(function(accumulator, cardValue){
      var string = [cardValue + " of " + suitValue];
      return accumulator.concat(string); 
    },[]);
    return accumulator.concat(OneSequence);
  },[]);
  return cards.flat();
}


$(document).ready(function(){
  go().forEach(function(card){
    $("ul").append("<li>" + card +"</li>")
  });
});