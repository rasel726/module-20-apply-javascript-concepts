function factorial (number){
    let i = number;
    while(i >= 1){
        result = result * i;
        i--;
    }
    return result;
}

const output = factorial(7);