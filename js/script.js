// code solution here
function President(name,  politicalParty, yearsInOffice, homeState){
  this.name = name
  this.politicalParty = politicalParty
  this.yearsInOffice = yearsInOffice
  this.homeState = homeState

  this.veto = function(){
    return "NO!";
  }

  this.passBill = function() {
    return "You can do that!";
  }

  this.doCharity = function(){
    return "I like to help people.";
  }

  this.sayHi = function(){
    return ("Hi, my name is " + this.name +". I am from " + this.homeState + ". I represent the " + this.politicalParty + "s, and was in office " + this.yearsInOffice + ".");
  }

  this.conductPressInterview = function(){
    return "I am proud to be an American.";
  }

}

var george = President("George Washington", "Tacos", "1780 - 1784", "Delaware");
var abraham = President("Abraham Lincoln", "Republican", "1860-1867", "Maine");
var richard = President("Richard Nixon", "Republican", "1980-1986", "New York");
var jimmy = President("Jimmy Carter", "Democrat", "1986-1990", "New Jersey");
