// 1. multiply nums es6

const multiply = (a, b) => a * b

// 2. find remainder es6

const remainder = (a, b) => a > b ? a % b : b % a

// 3. UEFA Euro 2016

function uefaEuro2016(teams, scores) {
  var winner;
  if (scores[0] > scores[1]) {
    winner = teams[0];
  } else if (scores[0] < scores[1]) {
    winner = teams[1];
  } else {
    return ('At match ' + teams[0] + ' - ' + teams[1] + ', ' + 'teams played draw.');
  }

  return ('At match ' + teams[0] + ' - ' + teams[1] + ', ' + winner + ' won!');
}

// 4. Do I get a bonus?

function bonusTime(salary, bonus) {
  return bonus ? '£' + salary * 10 : '£' + salary;
}

// 5. How good are you really?

function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  console.log(classPoints);
  var sum = classPoints.reduce(function(a, b) {
    return a + b;
  });
  var avg = sum / classPoints.length;
  return (yourPoints > avg)
}

// 6. Parse nice int from char problem

function getAge(inputString) {
  return parseInt(inputString);
}

// 7. Needle in a haystack

function findNeedle(haystack) {
  var lookup = 'needle';
  for (var i = 0; i < haystack.length; i++) {
    if (lookup) {
      return 'found the needle at position ' + haystack.indexOf(lookup);
    }
  }
}

// 8. String repeat

function repeatStr(n, s) {
  var newString = '';
  while (n > 0) {
    newString += s;
    n--;
  }
  return newString;
}

// 9. Volume of a Cuboid

var Kata;

Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height) {
    return length * width * height;
  };

  return Kata;

})();

// 10. Double char

function doubleChar(str) {
  var newS = '';
  for (var i = 0; i < str.length; i++) {
    newS += str[i] + str[i];
  }
  return newS;
}


// 11. Say Hello

function greet(name) {
  if (name === '' || name === null) {
    return null;
  } else {
    return 'hello ' + name + '!';
  }
}

// 12. Triangle?

const isTriangle = (a, b, c) => {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
  const result = area > 0 ? true : false;
  return result;
}

// 13. Find average

function average(scores) {
  var sum = scores.reduce(function(a, b) {
    return a + b;
  });
  var avg = Math.round(sum / scores.length);
  return avg;
}

// 14. Sort w/ arrow functions

var OrderPeople = function(people) {
  return people.sort((a, b) => a.age - b.age);
}

// 15. Discover original price

function discoverOriginalPrice(discountedPrice, salePercentage) {
  return Number((discountedPrice / (100 - salePercentage) * 100).toFixed(2));
}

// 16. Make a function that does arithmetic

function arithmetic(a, b, operator) {
  var r;
  switch (operator) {
    case "add":
      r = a + b;
      break;
    case "subtract":
      r = a - b;
      break;
    case "multiply":
      r = a * b;
      break;
    case "divide":
      r = a / b;
      break;
  }
  return r;
}

// 17. Vowel Count

function getCount(str) {
  var vowelsCount = 0;

  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }
  return vowelsCount;
}

// 18. Conor McGregor vs George Saint Pierre

var quote = function(fighter) {
  var lowerCaseFighter = fighter.toLowerCase();
  if (lowerCaseFighter === 'george saint pierre') {
    return "I am not impressed by your performance.";
  } else {
    return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
  }
};

// 19. ES6 String Addition

const joinStrings = (s1, s2) => `${s1} ${s2}`

// 20. Simple Multipication

const simpleMultiplication = n => n % 2 === 0 ? n * 8 : n * 9

// 21. Grasshopper

function addFive(num) {
  var total = num + 5;
  return total;
}

// 22. Even Or Odd

even_or_odd = number => number % 2 === 0 ? "Even" : "Odd"

// 23. Convert A Num to String

const numberToString = num => num.toString();

// 24. Last

function last(list) {
  if (arguments.length === 1) {
    if (!Array.isArray(list) && typeof list !== 'string') {
      console.log(list);
      return list;
    }
    console.log(list[list.length - 1]);
    return list[list.length - 1];
  }
  return arguments[arguments.length - 1];
}

// 25. Convert a String to a number

var stringToNumber = function(str) {
  return Number(str);
}

// 26. How many lightsabers do you own

function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach' ? 18 : 0;
}

// 27. Square(n) sum
function squareSum(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}

// 28. Remove First and Last Character
function removeChar(str) {
  return str.slice(1, str.length - 1);
};

// 29. 2 + 2 * 2 problem
function calculate() {
  return (2 + 2) * 2;
}

// 30. Find the position
function position(letter) {
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}

// 31. DNA to RNA
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

// 32. Switch It Up
function switchItUp(number) {
  switch (number) {
    case 0:
      number = "Zero";
      break;
    case 1:
      number = "One";
      break;
    case 2:
      number = "Two";
      break;
    case 3:
      number = "Three";
      break;
    case 4:
      number = "Four";
      break;
    case 5:
      number = "Five";
      break;
    case 6:
      number = "Six";
      break;
    case 7:
      number = "Seven";
      break;
    case 8:
      number = "Eight";
      break;
    case 9:
      number = "Nine";
      break;
  }
  return number;
}

// 33. Count of Positives
function countPositivesSumNegatives(input) {
  var posInt = 0;
  var negInt = 0;
  var newArr = [];
  if (input == null || input.length == 0) {
    return [];
  }
  for (var i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      posInt++;
    } else if (input[i] < 0) {
      negInt += input[i];
    }
  }
  newArr.push(posInt);
  newArr.push(negInt);
  return newArr;
}

// 34. Covert number to reversed array of digits
function digitize(n) {
  return n.toString().split("").map(Number).reverse();
}

// 35. Sort and Star
const twoSort = s => [...s.sort()[0]].join `***`

// 36. Grasshopper - Basic Function Fixer
function addFive(num) {
  var total = num + 5;
  return total;
}

// 37. Even or Odd?
even_or_odd = number => number % 2 === 0 ? "Even" : "Odd"

// 38. Count of Positives / sum of negatives

function countPositivesSumNegatives(input) {
  var posInt = 0;
  var negInt = 0;
  var newArr = [];
  if (input == null || input.length == 0) {
    return [];
  }
  for (var i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      posInt++;
    } else if (input[i] < 0) {
      negInt += input[i];
    }
  }
  newArr.push(posInt);
  newArr.push(negInt);
  return newArr;
}

// 39. Simple Calculator

function calculator(a, b, sign) {
  try {
    return eval(a + sign + b);
  } catch (e) {
    return 'unknown value';
  }
}

// 40. Add Length

function addLength(str) {
  return str.split(' ').map(function(x) {
    return x + ' ' + x.length;
  });
}

// 41. Counting Sheep

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}

// 42. Remove Exclamations

function removeExclamationMarks(s) {
  return s.replace(/[!]/g, "");

}

// 43. Get the mean

function getAverage(marks){
 var total = 0;
 for (var i=0; i<marks.length; i++) {
   total += marks[i];
 }
  return Math.floor(total / marks.length);
}

// 44. Price of Mangos

function mango(quantity, price){
    var cost = quantity * price;
    var freebies = Math.floor(quantity / 3) * price;
    return cost - freebies;
}

// 45. Counting Sheep

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}

// 46. Transportation on vacation

function rentalCarCost(d) {
  var costPerDay = 40 * d;
  var discount;
  if (d >= 7) {
    discount = 50;
  } else if (d >= 3 && d < 7) {
    discount = 20;
  } else {
    discount = 0;
  }
  return costPerDay - discount;
}


// 47. Spacify

function spacify(str) {
  var newS = str.split(" ");
  var result;
  for (var i = 0; i < newS.length; i++) {
    result = newS[i].split("");
  }
  return result.join(" ");
}

// 48. Series of Integers from M to N

function generateIntegers(m, n) {
  var result = [];
  while (m <= n) {
    result.push(m++);
  }
  return result;
}

// 49. Calculate Mean and Concatenate String

function mean(lst){
  return [Number(nums(lst).toFixed(1)),letters(lst)]
}

function nums(lst){
  var nums = lst.filter(function(num){
    return !isNaN(num);
  }).map(n=>parseInt(n));
  var mean = nums.reduce(function(a,b){
      return a + b / nums.length;
  },0);
  return mean;
}

function letters(lst){
  return lst.filter(isNaN).join('');
}

// 50. Highest and Lowest

function highAndLow(numbers){
  var splitStr = numbers.split(' ');
  splitStr = splitStr.sort(function(a,b){
    return a - b;
  },0);
  return splitStr[splitStr.length - 1] + ' ' + splitStr[0];
}

// 51. Convert celsius to farenheit and vice versa

function convertCF(num, scale){
  var args = [...arguments];
  if (scale === "c") {
    return (num - 32) * 5 / 9;
  } else if (scale === "f") {
    return (num * 9/5) + 32
  }  else if (args.length === 2 && scale !== "c" && scale !== "f"){
    throw Error;
  }  else {
    return (num - 32) * 5 / 9;
  }
}
