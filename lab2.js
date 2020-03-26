

//using reduce
const array = [1,2,3,5,7,8];

const add = (zero,addition) => zero + addition;

const multiply = (number,multiplier) => number * multiplier;

console.log(array.reduce(multiply));

console.log(array.reduce(add));


//Lesser 20

const array1 = [1 ,20 ,5 ,21 ,23];

const result = array1.filter(number => number<20);

console.log(result);


//Capitalize colors
const colors = ['Red','yellow','blue','gREEn'];
const captilizeColor = (spliter) => {

for(let i=0; i<spliter.length; i++) {
    firstChar = spliter[i].charAt(0).toUpperCase()
    len = spliter[i].length;
    words = (spliter[i].substring(1, len)).toLowerCase()
    spliter[i] = firstChar + words;
}

console.log(spliter.join(' '));


}

captilizeColor(colors);

//Difference 13
const difference = (x) => {
  if(x>13){
    return 2*(Math.abs(x-13));
  }
  else{
    return Math.abs(x - 13);
  }
}

console.log(difference(32));
console.log(difference(11));

//Hello
const greeter = (myArray,counter) => {
  let greetText = "Hello";

  for (let greet of myArray){
    console.log(`${greetText} ${greet}`);
  }
}

greeter(['Sam Fisher','Nathan Drake','Kratos'],3);

