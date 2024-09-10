//Write a loop 1 - 20
//Print even odd or prime
for (let i = 1; i <= 20; i++) {
    //Numbers 1-3 print out normally
    if (i < 4) {
      //checking if even
      if (i % 2 == 0) {
        console.log(`${i} is even`);
      } else {
        //else is odd
        console.log(`${i} is odd`);
      }
    } else {
      //Checking if prime
      if (i % 2 !== 0 && i % 3 !== 0) {
        console.log(`${i} is prime`);
      } else if (i % 2 == 0) { //check if even
        console.log(`${i} is even`);
      } else { // All else SHOULD be odd
        console.log(`${i} is odd`);
      }
    }
  }