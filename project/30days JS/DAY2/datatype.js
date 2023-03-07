//PRIMITIVE DT
let numOne = 2
const numTwo = 3
console.log(numOne == numTwo)

//NON PRIMITIVE DT
let nums = [2, 4, 6]
nums[1] = 3.5
console.log(nums)
//Math object
let PI = Math.PI
console.log(PI)

let bene = 12.5
console.log(Math.round(bene))

let score = 90.546
console.log(Math.ceil(score))

let num = [-5, 3, 4, -1, -10, 4]
num[1] = 0
console.log(num)
// To return the mini or maxi value using Math object we say;
let x = 1
let y = -10 
let z = 0
max = Math.max(x, y, z)
min = Math.min(x, y, z)
console.log(max)
console.log(min)
//creating ramdon numbers
const ranNum = Math.random() //between 0 and 0.999..
console.log(ranNum)
console.log(Math.random() * 100) //btn 0 to 99.999..

x = 60
console.log(Math.sin(x))
//string concatenation
let firstName = 'Bene'
let age = 20
let country = 'Nigeria'
let fullName = 'I am' + ' Bene' + '. I\'m from ' + country + ' I am ' + age + ' years old'
console.log(fullName)
//template strings or interpolation
let a = 10
let b = 20
sum = `The sum of ${a} and ${b} is ${30}`
// sum = `${a > b}`
console.log(sum)
//EXERCISE : LEVEL 1
//QUESTION 1 (Each line stands for a question)
let challenge = '30 Days Of JavaScript'

console.log(challenge)

console.log(challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

console.log(challenge.substring(3, 21))

console.log(challenge.substring(0 ,2))

console.log(challenge.includes('Script'))

console.log(challenge.split())

console.log(challenge.split(' '))
//not sure of this
let bigApps = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(bigApps.split(','))

console.log(challenge.replace('JavaScript', 'Python'))

console.log(challenge.charAt(15))
//not correct
// console.log(challenge.charCodeAt(J))

console.log(challenge.indexOf('a'))

console.log(challenge.lastIndexOf('a'))

let string = 'You cannot end a sentence with because because because is a conjunction'
console.log(string.indexOf('because'))

console.log(string.lastIndexOf('because'))

//Don't understand
console.log(string.search('because'))

console.log(challenge.trim())

console.log(challenge.startsWith('30'))

console.log(challenge.endsWith('JavaScript'))

console.log(challenge.match(''))

console.log(challenge.match('a'))

console.log(challenge.concat('30days of', ' Javascript'))

console.log(challenge.repeat(2))




