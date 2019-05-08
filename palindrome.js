function isPalindrome(inputStr) {
  var regEx = /[\W_]/g;

  if (inputStr.length < 2) return true;

  // appying regex to remove unwanted charachters and applying to lowercase
  var lowReqStr = inputStr.toLowerCase().replace(regEx, '');
  var reverseStr = lowReqStr.split("").reverse().join("");
  return lowReqStr == reverseStr;
};

function longestPalindromes(inputStr) {
  var length = 0, text = '';
  var regEx = /[\W_]/g;
  const arrayLongestPalindromes = [];

  // appying regex to remove unwanted charachters and applying to lowercase
  inputStr = inputStr.toLowerCase().replace(regEx, '');

  for (var i = 0; i < inputStr.length; i++) {
    // start with the longest possible string
    var longestSubs = inputStr.substr(i, inputStr.length);

    for (var j = longestSubs.length; j >= 0; j--) {
      var subStr = longestSubs.substr(0, j);
      if (subStr.length <= 1)
        continue;

      //console.log('checking: '+ subStr);
      if (isPalindrome(subStr)) {
        //console.log('palindrome: '+ subStr);
        if (subStr.length > length) {
          //console.log('palindrome: '+ subStr);
          arrayLongestPalindromes.push({
            text: subStr, index: i, length: subStr.length
          });
          length = subStr.length;
          text = subStr;
        }
      }
    }
  }

  return arrayLongestPalindromes.reverse();
};

function longestfirstNthPalindromes(aryPalindromes, n) {
  return aryPalindromes.slice(0, n);
}
function printPalindrome(result) {
  //var ary = longestfirstNthPalindromes(result,3);
  // console.log(result);
  result.map(item => console.log(item));
};

export {
  isPalindrome, longestPalindromes, longestfirstNthPalindromes
};
//   var result = longestfirstNthPalindromes(longestPalindromes("sqrrqabccbatudefggfedvwhijkllkjihxymnnmzpop"),3);
//   printPalindrome(result);