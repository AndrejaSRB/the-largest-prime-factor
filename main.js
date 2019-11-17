const calculateTheLargestPrimeFactor = num => {
    let divider = 2;
    let allPrimeFactors = [];
        while(num != 1) {
            if(num % divider === 0){
                num /= divider;
                allPrimeFactors.push(divider);
                divider = 2;
            } else {
                divider++;
            }
        }

    return biggest = allPrimeFactors[allPrimeFactors.length - 1];
}

const theBiggestPrimeFactor = calculateTheLargestPrimeFactor(600851475143);
console.log(theBiggestPrimeFactor)