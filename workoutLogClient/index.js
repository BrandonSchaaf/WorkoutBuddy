// Challenge 1
// Write a function that accepts two names as parameters and then prints the full name to the console
// Example: greeting('Jay', 'Jackson')
console.log('Challenge: 1')
function greeting(first, last) {
  console.log(first, last)
}
greeting('Jay', 'Jackson')
//
console.log('\n')
console.log('\n')
console.log('\n')
console.log('\n')
//
// Challenge 2
// Write a program that prints the numbers from 1 to 100. 
// For multiples of 3, instead of the number. print 'Fizz'
// For multiples of 5, print 'Buzz
// For multiples which are multiples of both 3 and 5, print 'FizzBuzz'
console.log('Challenge: 2')
for (var i = 0; i <= 100; i++) {
  if(i > 0){
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if(i % 3 === 0 ){
      console.log('Fizz')
    } else if(i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
  // Using ternary expression
  // for (var i = 1; i <= 100; i++) {
  //   console.log(i % 15 === 0? "FizzBuzz": i % 3 === 0? "Fizz": i % 5 === 0? "Buzz": i)
  // }
}
//
console.log('\n')
console.log('\n')
console.log('\n')
console.log('\n')
// 
// Challenge 3
// Write a function called isRightTriangle that accepts three parameters called: side, base, and hypotenuse.
// This function should return true if side*side + base*base = hypotenuse*hypotenuse
console.log('Challenge: 3')
function isRightTriangle(s, b, h) {
  if(s*s + b*b === h*h) {
    return true
  } else {
    return false
  }
  // using ternary expression
  // triangle = s*s + b*b === h*h ? true: false
  // return triangle
}
console.log(isRightTriangle(3,4,5))
console.log(isRightTriangle(5,6,7))
//
console.log('\n')
console.log('\n')
console.log('\n')
console.log('\n')
// 
// 
// Challenge 4
// Create an object literal called netflix. It will have Three properties: id, name, and seasonInfo.
// id will be an integer and name will be a string.
// seasonInfo will be another object with a property called episodeInfo.
// episodeInfo is an array of more objects with the properties: episodeNumber and episodeName.
console.log('Challenge: 4')
const netflix = {
  id: 1,
  name: 'Game of Thrones',
  seasonInfo: {
    episodeInfo: [
      {episodeNumber: 1, episodeName: 'Winter is Coming'},
      {episodeNumber: 2, episodeName: 'The Kingsroad'}
    ]
  }
}
console.log(netflix)
console.log('\n')
console.log(JSON.stringify(netflix,undefined,2))