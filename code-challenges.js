// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

const code = (string) => {
    //Returns the string argument after splitting it into an array, then mapping through each value(char). If the value is an 'a', 'e', 'i', or 'o', it will replace that letter with a special number assigned each respective letter. Otherwise it will return the normal character and then join the entire array with the replaced values back into a string.
    return string.split("").map(value => value === 'a' ? 4 : value === 'e' ? 3 : value === 'i' ? 1 : value === 'o' ? 0 : value).join("")

    //Refactored this code into the one above to make it look more simplified.
    // return string.split("").map(value => {
    //     if (value === 'a') {
    //         return 4
    //     }
    //     else if (value === 'e') {
    //         return 3
    //     }
    //     else if (value === 'i') {
    //         return 1
    //     }
    //     else if (value === 'o') {
    //         return 0
    //     }
    //     else {
    //         return value
    //     }
    // }).join("")
}
console.log(code(secretCodeWord1));
console.log(code(secretCodeWord2));


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const onlyA = (array) => {
    //Filters through the array argument. 
    return array.filter(value => {
        //Checks each value(word) to see if it includes an 'a' or 'A'. If it does, then it returns the word in a new array.
        if (value.includes('a') || value.includes('A')) {
            return value
        }
    })
}
console.log(onlyA(arrayOfWords));


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
var hand4 = [1, 2, 3, 4, 5]
// Expected output: false
var hand5 = [5, 5, 3, 3, 3]
// Expected output: true

const fullHouse = (array) => {
    //Initialize two numbers (num1 and num2) to be 0 and one array (uniquenNumArr) to be empty.
    let num1 = 0
    let num2 = 0
    let uniqueNumArr = []
    //Map through array argument and uses ternary to check if uniquNumArr has the same values as array. If uniqueNumArr has a value from the array argument, then it will return nothing, else it will push the value from the array argument into uniqueNumArr.
    array.map(value => uniqueNumArr.includes(value) ? "" : uniqueNumArr.push(value))
    //Create a for loop that will loop through each value in array argument.
    for (let i = 0; i < array.length; i++) {
        //If statement to compare the first value in uniqueNumArr with all the values in array argument.
        if (uniqueNumArr[0] === array[i]) {
            //If condition is true increase num1 by 1.
            num1++
        }
    }
    //Create another for loop that will loop through each value in array argument.
    for (let i = 0; i < array.length; i++) {
        //If statement to compare the second value in uniqueNumArr with all the values in array argument.
        if (uniqueNumArr[1] === array[i]) {
            //If condition is true, this time increase num2 by 1.
            num2++
        }
    }
    //Returns true if there is 1 three of a kind and 1 pair in either num value. Or else it returns false.
    return num1 == 2 && num2 === 3 || num1 === 3 && num2 === 2 ? true : false
}

console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))
console.log(fullHouse(hand4))
console.log(fullHouse(hand5))