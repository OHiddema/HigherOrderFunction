function multiplyByTwo(arr) {
    for (let i=0; i<arr.length; i++) {
        arr[i] *=2;
    }
    return arr;
}

let myArr = [1, 2, 3, 4, 5];
console.log(myArr);
myArr = multiplyByTwo(myArr);
console.log(myArr);