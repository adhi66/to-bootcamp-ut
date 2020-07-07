4. palindrome function

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
console.log(palindrome("Cigar? Toss it in a can. It is so tragic"));
console.log(palindrome("I did, did I?"));
console.log(palindrome("Red rum, sir, is murder"));
console.log(palindrome("Eva, can I see bees in a cave?"));
console.log(palindrome("Hello World"));