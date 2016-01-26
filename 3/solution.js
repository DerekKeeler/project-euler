/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143?
 */

function largestPrimeFactor(target, n) {
  if(target > n) {
    while( !(target % n) ) {
      target = target / n;
    }

    return largestPrimeFactor(target, n + 1);
  } else {
    return target;
  }
}

console.log(largestPrimeFactor(600851475143, 2));
