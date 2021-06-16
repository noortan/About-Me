'use struct'

let yourName =
prompt( "Enter Your Name Please") ;

alert( 'welcome welcome  '+yourName+ '  ^_^ im very happy that you choice to visit my wepbage');
alert( " I'd like to do a little experiment to see what you know about me ok")





function funPlace() {
  let plac = prompt("do think that i'm from AL-Zarqa");
  switch (plac.toLowerCase()) {
      case 'y':
      case 'yes':

          alert('no my friend im from Maan *_^');
          count++;
          break;
      case 'n':
      case 'no':
          alert('great im not from Al-Zarqa im from Maan');
          break;
      default:
          alert(' please answer the questions as y/n or yes/no');

  }
}




function funDrink() {
  let fvrDrink = prompt("Do you think I'm a fan of Nescafe?");
  switch (fvrDrink.toLowerCase()) {
      case 'y':
      case 'yes':

          alert('great nescafe is my favorite drink');
          count++;
          break;
      case 'n':
      case 'no':
          alert('You did not guess the correct answer, Nescafe,  is my love');
          break;
      default:
          alert(' please answer the questions as y/n or yes/no');

  }
}





function funProg() {
  let goodProgrammer = prompt("and now do  you think that i'm agood programer? ");
  switch (goodProgrammer.toLowerCase()) {
      case 'y':
      case 'yes':

          alert('Thank you for your good expectation  ^_^');
          count++;
          break;
      case 'n':
      case 'no':
          alert('oOoOops *_*');
          break;
      default:
          alert(' please answer the questions as y/n or yes/no');

  }
}


function funWork() {
  let workPlace = prompt("I have experience teaching some programming materials and supervising projects, the question is do you know where I was working ?");
  switch (workPlace.toLowerCase()) {
      case 'y':
      case 'yes':

          alert('Thank you for your good expectation  ^_^');
          count++;
          break;
      case 'n':
      case 'no':
          alert('its suadie arabia  *_*');
          break;
      default:
          alert(' please answer the questions as y/n or yes/no');

  }
}




function funKnow() {
  let knowMore = prompt("We're almost done do you want to know more details about me ? ");
  switch (knowMore.toLowerCase()) {
      case 'y':
      case 'yes':

          alert('Thank you , now you can explore my web page  ^_^');
          count++;
          break;
      case 'n':
      case 'no':
          alert('oOoOops *_*');
          break;
      default:
          alert(' please answer the questions as y/n or yes/no');

  }
}





let score = 0;
let count = 0; 

function myAge() {
  for (let i = 0; i < 4; i++) {
    let myAge = prompt('can you guess how old am i ? ');

    if (myAge == 32) {
      alert("You are incredible , thats correct answer ");
      score++;
      break;

    }
    else if (myAge < 32) {
      alert("your answer(" + myAge + ') its less than correct answer');
      count++
    }
    else {
      alert("your answer(" + myAge + ') its more than correct answer');
      count++;
    }

  }

  if (count == 4) {
    alert('Sorry, your chances are exhausted.\n The correct answer is 32 years');
  }
}

myAge();




let favdrink = ['coffe', 'tea', 'nescafe', 'late', 'moca'];
let status;

function favor(ri) {
  for (let i = 0; i < 6; i++) {
    let theGuessingGames = prompt('Can you guess my favorite drink? \n Please type a drink').toLowerCase();

    for (let j = 0; j < ri.length; j++) {
      if (ri[j] === theGuessingGames.toLocaleLowerCase()) {
        alert(" thats correct answer ");
        score++;
        status = true;
        break;

      }
    }

    if (status) {

      break;
    }


  }

  return ri;
}
alert('my favorite name is  \n' + favor(favdrink));
funPlace() ;
funDrink() ;
funProg() ;
funWork() ; 
funKnow(); 