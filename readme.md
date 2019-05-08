MAT Software Team Coding Challange
Task
Write an application that finds the 3 longest unique palindromes in a supplied string. 
For the 3 longest palindromes, report the palindrome, start index and length, in descending order of length.

Example Output
Given the input string: "sqrrqabccbatudefggfedvwhijkllkjihxymnnmzpop", the output should be:

Text: hijkllkjih, Index: 23, Length: 10

Text: defggfed, Index: 13, Length: 8

Text: abccba, Index: 5 Length: 6

Deliverables
Your solution may be submitted in a language of your choice.
Please include instructions for how to build and run your code.
Don't forget to include any tests in the package.

Guidance
You shouldn't spend more than a couple of hours on the solution.
We expect candidates to create code that is production quality - the solution should be correct, reliable, maintainable, reusable, portable and efficient.
For further guidance see Clean Code: A Handbook of Agile Software Craftsmanship by Robert C.Martin.

Development
This application is built using JavaScript.
The solution is a O(N^2) time and O(1) space solution.
The nth longest arrays are being saved in an array of objects that is sorted in a descending order by length.

Execution
babel is used for transpilation (es6)
jest is used for testing

run code with "node palindrome" command with uncommenting these statements in palindrome.js
    //   var result = longestfirstNthPalindromes(longestPalindromes("sqrrqabccbatudefggfedvwhijkllkjihxymnnmzpop"),3);
    //   printPalindrome(result);
 
run code with "npm test" command to run test code with exporting functions.(it will run palindrome.test.js)
    export {isPalindrome,longestPalindromes,longestfirstNthPalindromes};

