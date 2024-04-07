
// Function to reverse a word
function reverse(word) {
  // Split the word into an array of characters, reverse it, and join it back into a string
  return word.split("").reverse().join("");
}

// Function to check if a word is a palindrome
function isPalindrome(word) {
  // Get the reversed word
  const reversedWord = reverse(word);

  // Check if the word is the same as its reverse
  return word === reversedWord;
}

/* 
  Pseudocode:
  1. Reverse the input string.
  2. If the input is the same as the reversed input, return true.
  3. Otherwise, return false.
*/

/*
  Explanation:
  The `reverse` function splits the input word into an array of characters,
  reverses the order of the characters, and then joins them back into a string,
  effectively reversing the input word.

  The `isPalindrome` function uses the `reverse` function to get the reversed version of the input word.
  It then checks if the original word is equal to its reversed version.
  If they are equal, it returns true, indicating that the word is a palindrome; otherwise, it returns false.

  Test cases are provided below the main block to demonstrate the `isPalindrome` function.
*/

// Test cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));
}

module.exports = isPalindrome;
