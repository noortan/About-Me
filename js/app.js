'use struct'




let yourName = prompt( "Enter Your Name Please") ;

alert( 'welcome welcome  '+yourName+ '  ^_^ im very happy that you choice to visit my wepbage');
alert( " I'd like to do a little experiment to see what you know about me ok")
let yesCount = 0 ;
let noCount = 0 ; 
function theGuessingGames(answer) {
    if (answer.toLowerCase() === 'YES' || answer.toLowerCase() === 'Y') {
        yesCount++;
        alert('correct answer ');
        score++;
    }
    else if (answer.toLowerCase() === 'NO' || answer.toLowerCase() === 'N') {
        noCount++;
        alert('Wrong answer ');
    }
    else {
        alert('invalid answer please type, yes , y , no , n ');
    }
}
let conf1 ;
switch (conf1) {
    case true:
        {
           let  conf2 = confirm(" please use answer with Just yes or no ");


           let place = prompt("do think that i'm from AL-Zarqa ?").toLowerCase()  ;
            theGuessingGames(place);

            let favoriteDrink = prompt(" Do you think I'm a fan of Nescafe?").toLowerCase() ;
            theGuessingGames(favoriteDrink);

           let goodProgramer = prompt(" and now do  you think that i'm agood programer ?").toLowerCase() ;
            theGuessingGames(goodProgramer);

           let workPlace = prompt("I have experience teaching some programming materials and supervising projects, the question is do you know where I was working ??").toLowerCase() ;

            theGuessingGames(workPlace);
           

           
           let knowMore = prompt("  We're almost done do you want to know more details about me ? ").toLowerCase() ;

            theGuessingGames(knowMore);

            

            console.log(yesCount);
            console.log(noCount);
            break;



        }
    case false:
        {
            alert('Ok , no problem you can know more when you visite my wepbage !!')
        }


}
let score = 0 ;
let count = 0 ;
function myAge() {
  for (let i = 0; i < 4; i++) {
     let myAge = prompt('can you guess how old am i ? ');

      if (myAge ==32) {
          alert("You are incredible , thats correct answer ");
          score++;
          break;

      }
      else if ( myAge <32) {
          alert("your answer(" + myAge + ') its less than correct answer');
           count++
      }
      else {
          alert("your answer(" + myAge + ') its more than correct answer');
           count++ ;
      }

  }

  if ( count == 4) {
      alert('Sorry, your chances are exhausted.\n The correct answer is 32 years');
  }
}

myAge();




let favdrink = ['coffe', 'tea', 'nescafe', 'late', 'moca'];
let status;

function favor(ri)
{
    for (let i = 0; i < 6; i++) {
        let guessDrink = prompt('Can you guess my favorite drink? \n Please type a drink').toLowerCase();
    
        for (let j = 0; j < ri.length; j++) {
            if (ri[j] === guessDrink.toLocaleLowerCase()) {
                alert("You are incredible , thats correct answer ");
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
alert('my favorite drink is  \n' +favor(favdrink));