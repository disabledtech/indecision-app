// function square(x) {
//     return x * x;
// }

// console.log(square(8));

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;



// console.log(squareArrow(4));
const myName = 'Taylor Danielson';

const getFirstName = (fullName) => fullName.split(' ')[0];
const getFirstName2 = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(getFirstName(myName));
console.log(getFirstName2(myName));