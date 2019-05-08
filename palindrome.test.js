import {isPalindrome,longestPalindromes,longestfirstNthPalindromes} from './palindrome';

test('it detects palindromes', () => {
    expect(isPalindrome('palindrome')).toBe(false);
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('a')).toBe(true);
    expect(isPalindrome('gg')).toBe(true);
    expect(isPalindrome('pop')).toBe(true);
    expect(isPalindrome('1212')).toBe(false);
});
test('it detects non palindromes', () => {
    expect(isPalindrome('not a palindrome')).toBe(false);
});
test('it detects palindromes with different characters', () => {
    expect(isPalindrome('A man, a plan, a canal Panama')).toBe(true);
});
test('it detects palindromes with spaces', () => {
    expect(isPalindrome('never odd or even')).toBe(true);
});
test('it detects palindromes with lowercase', () => {
    expect(isPalindrome('My age is 0 0 si ega ym.')).toBe(true);
});
test('it detects palindromes with numbers', () => {
    expect(isPalindrome('1 eye for of 1 eye.')).toBe(false);
});
test('it detects palindromes with different punctuation,symbols,spaces', () => {
    expect(isPalindrome('0_0 (: /-\ :) 0–0')).toBe(true);
});
test('it detects longest palindrome inside a string ', () => {
    expect(longestPalindromes('sqrrqabccbatudefggfedvwhijkllkjihxymnnmzpop')[0]['text']).toBe('hijkllkjih');
});
test('it detects length of the longest palindrome inside a string ', () => {
    expect(longestPalindromes('sqrrqabccbatudefggfedvwhijkllkjihxymnnmzpop')[0]['length']).toBe(10);
});
test('it detects index of the longest palindrome inside a string ', () => {
    expect(longestPalindromes('sqrrqabccbatudefggfedvwhijkllkjihxymnnmzpop')[0]['index']).toBe(23);
});
