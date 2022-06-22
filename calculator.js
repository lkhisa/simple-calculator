function calculator(operation, numbers) {
    if(operation === 'addition') {
        let addResult = 0;
        for(let i = 0; i < numbers.length; i++) {
            addResult += numbers[i];
        }
        console.log(addResult);
    }
    if(operation === 'subtraction') {
        let subtractResult = numbers[0];
        for(let i = 1; i < numbers.length; i++) {
            subtractResult -= numbers[i];
        }
        console.log(subtractResult);
    }
    if(operation === 'multiplication') {
        let multiplyResult = 1;
        for(let i = 0; i < numbers.length; i++) {
            multiplyResult *= numbers[i];
        }
        console.log(multiplyResult);
    }
    if(operation === 'division') {
        let divisionResult = numbers[0];
        for(let i = 1; i < numbers.length; i++) {
            divisionResult /= numbers[i]
        }
        console.log(divisionResult.toFixed(4));
    }
}
calculator("division", [1,2,3]);