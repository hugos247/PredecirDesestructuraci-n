//First part

/*const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

//The output is:
/*
Tesla
Mercedes

 */

//Second part

/*const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

/* 
The output is:

reference error in console.log(name)

(And elon)

*/

//Third Part

/*const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

/*
The output is:

12345
undefined



 */

//Fourth part

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first]  = numbers;          /* (2) */
const [,,,second]  = numbers;      /* (5) */
const [,,,,,,,,third] = numbers;  /* (2)*/
//Predict the output
console.log(first == second);
console.log(first == third);

/*

The output is:
false
true

*/



//Fifth part 


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;               //value
const { secondKey } = lastTest;         //[1,5,1,8,3,3]
const [ ,willThisWork] = secondKey;     //[1, 5, 1, 8, 3, 3]
//Predict the output                    //1,5 (5)
console.log("\n" + key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);


/*
The output is:

value
[1,5,1,8,3,3]
1
5




*/

