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
    for (let i = 3; i < 100; i+=3){
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

multiplesOfThreeOrFive();