//Code your solutions in this files

//const fiveToOneHundred = function() {
    //}

const fiveToOneHundred = () => {
    for (let i = 5; i < 101 ; i ++ ){
        console.log(i);
    }
}
// fiveToOneHundred()

const multiplesOfThree = () => {
    for (let i = 3; i <= 100; i+=3){
        console.log(i);
    }
}
//multiplesOfThree()

const multiplesOfThreeOrFive = () => {
    for(let i = 0; i <= 100; i++){
        if(i % 3 === 0 || i % 5 === 0){
            console.log(i);
        }
    }
}

// multiplesOfThreeOrFive();

const untilNum = (int) => {
    for(let i = 1; i <= int; i++){
        console.log(i);
    }
}
// untilNum(7);

const multiply = (n1,n2) => {
    return n1 * n2;
}
// console.log(multiply(9,2));

const add =  (int1,int2) => {
    if (int1 === int2){
        return 3 * (int1 + int1)
    }else {
        return int1 + int2
    }
}

// console.log(add(15,5));

const isNegative = (y1) =>{
    if (y1 < 0){
        return true;
    }else if (y1 === 0) {
        return NaN;
    }else{
        return false;
    }
}
// console.log(isNegative(0));

const triangleArea = (b,h) => {
    return 1/2 * (b * h)
}
// console.log(triangleArea(203,137))

const betweenTwentyAndFourty = (dell1) => {
    if (dell1 < 40 && dell1 > 20){
        return true
    }else{
        return false
    }
}
// console.log(betweenTwentyAndFourty(30))

const largest = (int1,int2,int3) => {
    return Math.max(int1,int2,int3)    
}
// console.log(largest(17,10,72));

const printTime = () => {
    let hour = new Date()
    console.log(`${hour.getHours()}:${hour.getMinutes()}:${hour.getSeconds()}`)
}
printTime();