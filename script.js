function multiplyByTwo(arr, instruction) {
    for (let i=0; i<arr.length; i++) {
        arr[i] = instruction(arr[i]);
    }
    return arr;
}


function myFunction(item) {
    return 2*item;
}

let myArr = [1, 2, 3, 4, 5];
console.log(myArr);
myArr = multiplyByTwo(myArr, myFunction);
console.log(myArr);