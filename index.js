function scuberGreetingForFeet(distance){
  // Write your code here!
  
  let respone;

  if (distance <= 400){
    respone = 'This one is on me!';
  }
  else if (distance > 2000 && distance <= 2500){
    respone = 'I will gladly take your thirty bucks.';
  }
  else if (distance > 2500){
    respone = 'No can do.';
  }
  return respone;
}

function ternaryCheckCity(city){
  // Write your code here!
  let answer;

  if(city !== 'NYC'){
    answer = 'No go.';
  }
  else {
    answer = 'Ok, sounds good.';
  }
  return answer;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let goodBye;

  switch (tip) {
    case 'generous':
      
      goodBye = 'Thank you so much.';
      break;

      case 'not as generous':
      
      goodBye = 'Thank you.';
      break;

        default:
          goodBye = 'Bye.';
          break;
  }
  return goodBye;
}