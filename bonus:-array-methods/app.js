let coolThings = ['one', 'two', 'three']

// add element to end
coolThings.push('four')
console.log(coolThings, `we've pushed four onto the array on line 4`)

// add element to start 
coolThings.unshift('zero')
console.log(coolThings, `we've added zero to the start on line 8`)

coolThings.push('zafina')
console.log(coolThings, `// whoops, I've put the wrong type of thing into this array.`)
// to get rid of the last element, we can use .pop()
// we don't need to pass an argument - pop will get rid of the last element of the array.
const tekkenChars = coolThings.pop()
console.log(coolThings, `I've taken off zafina on line 14`)
console.log(`the string ${tekkenChars} is returned --, and I can store my popped element in a variable - it's what is returned from the method`)

// removes the first element
let removed = coolThings.shift()
console.log(coolThings, `zero has been removed :( using shift`, removed)

// find index of an element
console.log(`coolThings.indexOf('two'),`, coolThings.indexOf('two'),` is the index of the 'two' element`)
console.log(coolThings.includes('asuka'), `coolThings.includes('asuka') returns false because the element is not in the array`)
// includes uses strict type checking - an array with the number 23 would return false if you used '23' (a string) in the inludes method argument. There is no type coercion 


// and here's an easy way to combine two arrays using .concat()
let firstArr = ['asuka', 'lili', 'zafina']
let secondArr = ['paul', 'bob', 'jin']
// short for concatanate, just like how we add strings! 
console.log(firstArr.concat(secondArr))





