// PALINDROME 
// console.log("s000");

// function palindrome(s) {
//     let n = s.length;
//     for (let i = 0; i < n/2; i++) {
//         if (s[i] !== s[n - 1 - i]) {  
//            return false;
//         }  
//     }  
//     return true;
// }

// console.log(palindrome("TENET"));
// console.log(palindrome("aaaiuheiufi"));

const str = process.argv[2];

const isPalindrome = (str) =>{
    return str.split("").reverse().join("")===str;
};

console.log(isPalindrome(str));
