function palindrome(str) {
  var re = /[\W_]/g;
  console.log(str.toLowerCase().replace(re, ''));
  console.log(str.split('').reverse().join('').toLowerCase());
  if (
    str.toLowerCase().replace(re, '') ===
    str.toLowerCase().replace(re, '').split('').reverse().join('')
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome('A man, a plan, a canal. Panama'));
