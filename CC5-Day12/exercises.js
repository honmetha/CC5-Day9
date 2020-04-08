// Ex1.10

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = prompt("x?", ''), n = prompt("n?", '');

if (n <= 0) {
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
} else {
  alert( pow(x, n) );
}

// Ex1
let personA = {};
let personB = {};

personA.name = prompt(`What's the first person name?`);
personA.BMI = +prompt(`BMI?`);
personB.name = prompt(`What's the second person name?`);
personB.BMI = +prompt(`BMI?`);

if (personA.BMI > personB.BMI) {
  alert(`Name: ${personA.name} || BMI: ${personA.BMI}`);
} else {
  alert(`Name: ${personB.name} || BMI: ${personB.BMI}`)
}

// Ex2
let personA = {};
let personB = {};

personA.name = prompt(`What's the first person name?`);
personA.height = +prompt(`How tall(cm)?`);
personA.weight = +prompt(`Weight(kg)?`);
personB.name = prompt(`What's the second person name?`);
personB.height = +prompt(`How tall(cm)?`);
personB.weight = +prompt(`Weight(kg)?`);
personA.BMI = personA.weight / ((personA.height / 100) * (personA.height / 100));
personB.BMI = personB.weight / ((personB.height / 100) * (personB.height / 100));

if (personA.BMI > personB.BMI) {
  alert(`Name: ${personA.name} || BMI: ${personA.BMI}`);
} else {
  alert(`Name: ${personB.name} || BMI: ${personB.BMI}`)
}

// Ex3
let number;
let highestNumber = "";

while (number !== null) {
  number = prompt(`Insert number`);
  let parseIntNumber = parseInt(number);
  if ( parseIntNumber > highestNumber) {
    highestNumber = parseIntNumber;
    console.log(number);
    console.log(highestNumber);
  } else {
    
  }
}

highestNumber === "" ? alert(`The highest number is none.`) : alert(`The highest number is ${highestNumber}.`);

// Ex4
let number;
let parseIntNumber;
let firstHighestNumber = "";
let secondHighestNumber = "";

let twoHighestNumbers = () => {
  if (parseIntNumber > secondHighestNumber) {
    if (parseIntNumber > firstHighestNumber) {
      secondHighestNumber = firstHighestNumber;
      firstHighestNumber = parseIntNumber;
    } else {
      secondHighestNumber = parseIntNumber;
    }
  }
  console.log(`1st: ${firstHighestNumber} // 2nd: ${secondHighestNumber}`);
};

while (number !== null) {
  number = prompt(`Insert number`);
  parseIntNumber = parseInt(number);
  console.log(`number: ${number} // parseIntNumber: ${parseIntNumber} // 
  1st: ${firstHighestNumber} // 2nd: ${secondHighestNumber}`);
  twoHighestNumbers();
}

alert(`1st: ${firstHighestNumber} // 2nd: ${secondHighestNumber}`);

// Ex4: Simplified
let max1 = -Infinity;
let max2 = -Infinity;
let input = -Infinity;

while (input) {
  input = +prompt('Enter Number:');
  console.log(`input: ${input}`);
  if (input >= max1) {
    max2 = max1;
    max1 = input;
  } else if (input > max2) {
    max2 = input;
  }
}

console.log(max1, max2);