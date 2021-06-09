'use struct'

let yourName =
prompt( "Enter Your Name Please") ;

alert( 'welcome welcome  '+yourName+ '  ^_^ im very happy that you choice to visit my wepbage');
alert( " I'd like to do a little experiment to see what you know about me ok")

let place = prompt("do think that i'm from AL-Zarqa ?").toLowerCase()  ;


if(place === "yes"||place === "y"){
 alert(" no my friend im from Maan *_^") ;
}
else if(place==="no"||place==="n"){
alert(" great im not from Al-Zarqa im from Maan") ;
//console.log("great im not from Al-Zarqa im from Maan"); 
}
else{
 alert(" please enter you answer as yes , y , no , n  ")
}

let favoriteDrink = prompt(" Do you think I'm a fan of Nescafe?").toLowerCase()

if( favoriteDrink === "yes" || favoriteDrink === "y"){
 alert("great nescafe is my favorite drink") ;
 //console.log("great nescafe is my favorite drink") ;
}else if( favoriteDrink === "no" ||favoriteDrink === "n"){
 alert("You did not expect the correct answer, Nescafe, my love") ;
} else{
 alert("please enter you answer as yes , y , no , n ") ;
}

let goodProgramer = prompt(" and now do  you think that i'm agood programer ?").toLowerCase() ;

if(goodProgramer === "yes" || goodProgramer === "y"){
 alert( "Thank you for your good expectation  ^_^ ");
// console.log(" righte answer im good in programing "); 
} else if(goodProgramer === "no" || goodProgramer === "n" ){
 alert("oOoOops *_*") ;
} else{
 alert("please enter you answer as yes , y , no , n") ;
}

let workPlace = prompt("I have experience teaching some programming materials and supervising projects, the question is do you know where I was working ??").toLowerCase() ;

if( workPlace === "yes" || workPlace === "y"){
  alert("nice try yes it was in Saudi arabia ") ;
  //console.log("you know  thing about me ") ;
} else if( workPlace === "no" || workPlace === "n"){
  alert(" it was in saudi arabia") ;
} else{
  alert("please enter you answer as yes , y , no , n")
}

let knowMore = prompt("  We're almost done do you want to know more details about me ? ").toLowerCase() ;

if( knowMore === "yes" || workPlace === "y"){
  alert("you can now see my web page i list all my information there  ^_^") ;
  //console.log("come visit my web page you will know more about me ") ;

} else if( workPlace === "no" || workPlace === "n"){
  alert(" ok,now you can leave this web page") ;
} else{
  alert( "please enter you answer as yes , y , no , n")
}

for (let i = 0; i < 4; i++) {
  let myAge = prompt('can you guess how old are me ? ');
  if (myAge === 32) {
    alert(' yes it is ^_^ ');
  }
  else if (myAge > 32) { alert('too hight , try again') }

  else if (myAge < 32) {
    alert('too low, try again');
  }

  else {
    alert('okay , I am 32 years old ');
    break;
  }
  if (i == 3) { alert(' ops you can not guess my ege ,i am 32 years old ^_^'); }
}
 
let favdrink = ['coffe', 'tea', 'nescafe', 'late', 'moca'];
for (let x = 0; x < 6; x++) {
  let guessDrink = prompt('Can you guess my favorite drink? \n Please type a drink').toLowerCase();

  if (guessDrink === favdrink[0] || guessDrink === favdrink[1] || guessDrink === favdrink[2] || guessDrink == favdrink[3] || guessDrink == favdrink[4]) {
    alert('nice work! , thats correct');
    console.log(' true');
    score++;
    break;
  }

  else {
    alert('please , try again')


  }

  if (x == 5) { alert('My favorate drink are' ['coffe', 'tea', 'nescafe', 'late', 'moca'] )
  };

}


alert(`Thank you ${userName} Your score is = ${score}/7 `)
console.log('your score =', score)