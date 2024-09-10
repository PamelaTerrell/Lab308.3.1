for(x = 1; x <= 100; x++){
    console.log(x)
if(x % 3==0){
    console.log(x + "Fizz")
}
if(x % 5==0){
    console.log(x + "Buzz")
}
if (x % 5==0 && x % 3 ==0)
    console.log(x + "Fizz Buzz")

if (x % 5!=0 && x % 3 !=0)
    console.log(x)

}