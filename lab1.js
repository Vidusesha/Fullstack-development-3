

//largest number

function largest (a,b,c){
  if(a>b){
    if(a>c){
      console.log(a);
      }
      else{
        console.log(c);
      }
    }
    else if(b>a){
      if(b>c){
      console.log(b);
      }
      else{
        console.log(c);
      }
    }
  else {
    console.log("error");
  }
}

console.log(largest(12,14,13));
console.log(largest(123,5,45));
console.log(largest(1234,1444,134566));

//capitalise


var sentence = "the quick brown fox";

splited = sentence.split(' ');

for(let i=0; i<splited.length; i++) {
    upperChar = splited[i].charAt(0).toUpperCase()
    len = splited[i].length;
    word = splited[i].substring(1, len)
    splited[i] = upperChar + word;
}

console.log(splited.join(' '));


//angle

function findAngle(angle){
  if(angle == 90){
    sol = "right";
  }
  else if(angle>90){
    if (angle == 180){
      sol = "straight";
    }else{
    sol = "obtuse";
  }
  }
  else if(angle<90){
    sol = "acute";
  }
  else{
    sol = "unknown angle"
  }
  console.log(sol);
}


findAngle(90);
findAngle(179);
findAngle(45);
findAngle(180);


//three letters 

function right(str){

  if(str.length > 3){
  var strr = str.substring(str.length - 3)
  strr += str.substring(0 , str.length - 3)
  return strr;
  }
  else{
    return str;
  }
	
}

right("tester");
right("Python");
right("Hi");
right("Javascript");

