//for(let i = 0; i < 10; i = i++){
//console.log(i)
//}


//countdown from 10 to 1
//for(let i = 10; i > 0; i--){
    //console.log(i)
//}


//output odd numbers
//for(let i = 1; i <= 10; i += 2){
 //   console.log(i)
//}

//output multiples of 3 stating at 6 and ending at 60
//for(let i = 6; i <= 60; i+=3){
    console.log(i)
//}

//let start = '';
//for (let i = 0; i < 7; i++) {
 // start += '#';
//  console.log(start);
//}

for (let i = 1; i <= 20; i++) {

    let b = 0;
    if (i % 2 == 0) {
        console.log(`${i} : Even`);
    }

    else if (i % 2 == 1) {
        console.log(`${i} : Odd`);
    }
    

    for (let j = 1; j <= i; j++) {

        let a = i % j;


        if (a == 0) {
            b++;

        }
    }
    if (b <= 2) {
        console.log(`${i} : Prime`);
    }
    else {
        console.log(`${i} : Not Prime`);
    }
}
