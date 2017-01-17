// 1. reverse a string


function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");

// 2. factorialize

function factorialize(num) {
  var cnt = 1;
  for (var i = 1; i <= num; i++) {
    cnt *= i;
  }
  return cnt;
}

factorialize(5);

//3. find longest word in str

function findLongestWord(str) {
  var splitStr = str.split(' ');
  var longest = 0;
  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > longest) {
      longest = splitStr[i].length;
    }
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// 4. Palindromee


function palindrome(str) {
  var regex = /[^a-zA-Z0-9]/g;
  var lowercase = str.toLowerCase().replace(regex, '');
  var reversedStr = lowercase.split('').reverse().join('');

  if (lowercase === reversedStr) {
    return true;
  } else {
    return false;
  }
}



palindrome("eye");


// 5. Title case

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
  }
  return splitStr.join(' ');
}

titleCase("I'm a little tea pot");


// 6. Largest number

function largestOfFour(arr) {
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    var largestNumber = 0;
    for (var sub = 0; sub < arr[i].length; sub++) {
      if (arr[i][sub] > largestNumber) {
        largestNumber = arr[i][sub];
      }
    }
    results[i] = largestNumber;
  }
  return results;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);


// 7. Confirm the ending


function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}

confirmEnding("Bastian", "n");

// 8. Repeat a string

function repeatStringNumTimes(str, num) {
  var accumulatedStr = '';
  while (num > 0) {
    accumulatedStr += str;
    num --;
  }
  // repeat after me
  return accumulatedStr;
}

repeatStringNumTimes("abc", 3);

// 9. Truncate a string

function truncateString(str, num) {
  if (num <= 3) { return str.slice(0, num) + "..."; }
  else if (str.length > num) {
  return str.slice(0, num - 3) + "...";
} else {
  return str;
 }
}

truncateString("A-tisket a-tasket A green and yellow basket", 3);

// 10. Chunky Monkey

function chunkArrayInGroups(arr, size) {
  var chunked = [];
  while (arr.length > 0) {
    chunked.push(arr.slice(0,size));
    arr = arr.slice(size);
  }
  return chunked;
}

chunkArrayInGroups(["a", "b", "c", "d"], 1);

// 11. Slasher Flick

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr.splice(0,howMany);

  return arr;

}

slasher([1, 2, 3], 2);

// 12. Mutations


function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i=0; i<test.length; i++) {
   if (target.indexOf(test[i]) < 0)
     return false;
   }
     return true;
}


mutation(["hello", "hey"]);

// 13. Falsy Bouncer

function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);

// 14. Seek And Destroy


function destroyer(arr) {
  var result = [];
  for (var i=0; i<arr.length; i++) {
    var found = false;
  for (var j=1; j<arguments.length; j++) {
    if (arr[i] === arguments[j]) {
      found = true;
    }
  }
  if (!found) result.push(arr[i]);
  }
  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// 15. Where do I Belong?

function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return parseInt(a);
  }

  return arr.length;
}

getIndexToIns([40, 60], 50);

// 16. Sum nums in range

function sumAll(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var sum = 0;
  for (min; min <= max; min++){
     sum += min;
  }
  return sum;
}

// 17. Diff two arrays

function diffArray(arr1, arr2) {
  var newArr = [];
  for (var i=0; i<arr1.length;i++){
     if (arr2.indexOf(arr1[i]) === -1)
        newArr.push(arr1[i]);
     }
  for (var j=0; j<arr2.length;j++){
      if (arr1.indexOf(arr2[j]) === -1)
        newArr.push(arr2[j]);
    }
    return newArr;
 }

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// 18. Caeser cipher

function rot13(str) {
  var newStr = '';
  for (var i=0; i<str.length; i++) {
      var c = str.charCodeAt(i);
    if (c >= 65 && c <= 77) {
      c += 13;
    }
    else if (c >= 78 && c <= 90 ) {
      c -= 13;
    }
      newStr += String.fromCharCode(c);
  }
  return newStr;
}

rot13("SERR PBQR PNZC");

// 19. Roman Numeral Converter

function convertToRoman(num) {
   var numerals = [
      ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
      ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
      ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
      ["M","MM","MMM"/*Trippy nonexistent-ish numerals*/]
   ];
    var onesPlace = Math.floor(num / 1 % 10);
    var tensPlace = Math.floor(num / 10 % 10);
    var hundredsPlace = Math.floor(num / 100 % 10);
    var thousandsPlace = Math.floor(num / 1000 % 10);

  return conversion(thousandsPlace,numerals[3]) + conversion(hundredsPlace,numerals[2]) + conversion(tensPlace,numerals[1]) + conversion(onesPlace,numerals[0]);

  function conversion(num, val) {
    if (num === 0) {
        return '';
    } else {
      return val[num - 1];
      }
    }
  }

convertToRoman(36);

// 20. Search and replace

function myReplace(str, before, after) {
var lowerCaseStr = str.split(" ");
var newArr = [];
var patt = /^[A-Z]*$/; // simple one char regEx

for (var i = 0; i < lowerCaseStr.length; i++) {
  if (lowerCaseStr[i] === before) {
    if (patt.test(lowerCaseStr[i][0])) {
      newArr.push(after.split('')[0]
      .toUpperCase() + after.split('')
      .slice(1,after.length)
      .join(''));

    } else {
       newArr.push(after);
    }

  } else {
     newArr.push(lowerCaseStr[i]);
  }
}
return newArr.join(" ");
}


myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("This has a spellngi error", "spellngi", "spelling");
myReplace("Let us get back to more Coding", "Coding", "algorithms");

// 21. DNA Pairing


function pairElement(str) {
  var splitStr = str.split("");
  var newArr = [];
  for (var i=0; i<splitStr.length; i++){
    switch (splitStr[i]){
      case 'C':
        newArr.push(["C","G"]);
        break;
      case 'G':
        newArr.push(["G","C"]);
        break;
      case 'A':
        newArr.push(["A","T"]);
        break;
      case 'T':
        newArr.push(["T","A"]);
        break;
    }
  }

  return newArr;
}

pairElement("GCG");

// 22. Boo Who?

function booWho(bool) {
  return typeof bool === 'boolean';
}



booWho(null);


// 23. Sorted Union

function uniteUnique() {
  var result = [];
  for (var i=0; i<arguments.length; i++) {
    for (var j=0; j < arguments[i].length; j++){
      if (result.indexOf(arguments[i][j]) == -1) {
      result.push(arguments[i][j]);
      }
    }
  }
      return result;
}



uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// 24. Convert HTML entities


function convertHTML(str) {
  return str
  .replace(/&/g,"&amp;")
  .replace(/</g,"&lt;")
  .replace(/>/g,"&gt;")
  .replace(/"/g,"&quot;")
  .replace(/'/g,"&apos;");
}

convertHTML("Dolce & Gabbana");

// 25. Spinal Tap


function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase().replace(/\s|_/g, '-');
}

spinalCase('This Is Spinal Tap');

// 26.  Sum ALl Odd Fibonacci Numbers

function sumFibs(num) {
       var previous = 1;
       var current = 1;
       var next = current+previous;
       var sum = current+previous;
       while (next <= num) {
         if (next % 2 !== 0) {
          sum += next;
        }
          previous = current;
          current = next;
          next = current + previous;
          console.log(previous,current,next,sum);
   }
  return sum;
}

sumFibs(4);
