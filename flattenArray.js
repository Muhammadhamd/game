// const ArraysIs = [
//     1,
//     2,
//     [3,4 ,5 , [2,2,2]],
//     5,
//     10
// ]
// let newArr = []
// function flatArray(arr){

//     arr.forEach(element => {
//         if (Array.isArray(element)) {
//             newArr.concat(flatArray(element))
//         }
//         else{
//             newArr.push(element)
//         }
//     });
//     newArr.sort((a,b)=>a-b)
//     newArr = [...new Set(newArr)]
//     return newArr
// }
// function mult(data){
//     console.log(data)
//    data = data.reduce((total , current)=>{
//         total = total + current
//         return total
//     },0)
//     console.log(data)
// }

// mult([1,2,3,34])

// function Caluclate(...number){

//     number = number?.filter((item)=>typeof item === "number")
//    number = number?.reduce((total , each)=> total + each)
//    console.log(number)
// }

// Caluclate("faef" , 3)


// flatArray(ArraysIs)

// function groupAnagrams(strs) {
//     const groups = {}; // Using an object as a hash table
//     for (let str of strs) {
//         // Sort the characters of the string to use as a key
//         let sorted = str.split('').sort().join('');
//         console.log(sorted)
//         // If the key exists, push the original string, else create a new array
//         if(!groups[sorted]){
//             groups[sorted] = []
//         }
//         groups[sorted].push(str)
// }
// return Object.values(groups)

// }

// // Example usage
// const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const groupedAnagrams = groupAnagrams(input);
// console.log(groupedAnagrams);

// function checkbrac(s){
//     const stack = []
//     const bracobj ={
//         ')': '(',
//         '}': '{',
//         ']': '['
//     };

//     for (let char of s) {

//         console.log(bracobj[char])
//         if (bracobj[char]) {
//             // Pop the top element from the stack (if stack is not empty) or use a dummy value
//             let topElement = stack.length === 0 ? '#' : stack.pop();


//             // If the mapping for the closing bracket does not match the top element, return false
//             if (bracobj[char] !== topElement) {
//                 return false;
//             }
//         }else {
//             // If it's an opening bracket, push it onto the stack
//             stack.push(char);
//     console.log(stack)

//         }

//     }
//     return stack.length === 0;
// }

// const checkis =checkbrac("()")
// console.log(checkis)
// const arr = [1,21 , 3]
// console.log("Fa",Math.max(...arr))
// function tofindthegreatorNum(arr){
//     let GreatorNum = 0
//     for (let i = 0; i < arr.length; i++) {

//         if (GreatorNum < arr[i]) {
//             GreatorNum = arr[i]
//         }
//     }
//     return GreatorNum
// }

// const theGreat = tofindthegreatorNum(arr)
// console.log(theGreat)
// function findMissingNumber(arr) {
//     const missing =[]
//     for (let i = 1; i <= theGreat; i++) {
//         if (arr.indexOf(i) == -1) {
//             missing.push(i)
//         }
//     }
//     console.log(missing)
// }

// const arris = findMissingNumber(arr)

const arr = [1, 2, 10, 3, 4, 5, 6, 7, 8]

// function RotateArr(arr,rotateFrom){
//     // const rotatedArr = []
//     if (arr.indexOf(rotateFrom) < 0)  return arr
//     console.log()
// for (let i = 0; i < arr.length; i++) {


//     if (arr.indexOf(rotateFrom) > -1) {


//         if (i > arr.indexOf(rotateFrom)) {
//     rotatedArr.push(arr[i])
//         }
//     }
// }
// arr = [...rotatedArr,...arr]
//     const part1 = arr.slice(0, rotateFrom)
//     console.log(part1)
//     const part2 = arr.slice(rotateFrom)
//     return [...part2 , ...part1]
// }

// const rotateed = RotateArr(arr,10)
// console.log(rotateed)
// const metaData = {
//     sender:{
//       id: 1,
//       name: "fafaf",
//       picture:"fdafas"
//     },
//     receiver:{
//       id:"fsdfsa",
//       name:"faefas",
//       picture: "vcsadfa"
//     }


// }
// console.log(Date.now())
// console.log(metaData.toString())
// console.log(JSON.stringify(metaData))

// function Nth(a){
//     a = a.slice(2)
//     return a
// }

// console.log(Nth(arr))

// -------------- to check all the values in an array are same
// function iftrue(arr){
//     return  new Set(arr).size === 1
// }
// console.log(iftrue([1,1,1,1,1,1,1 ,6,6]))



// ----- to merge two arrays
// function merge(a,b) {
//       return [...new Set([...a,...b])].sort((a,b)=>a-b)


// }
// console.log(merge([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); // Output: [123, 456]


// const obj ={
//     b:"fasfa",

// }
// function CheckKeyINobj(a,b){
//     console.log(b in a)
// }

// CheckKeyINobj(obj,"b")
// function
//     myFunction(a, y) {

//     // for (const isb in a) {

//     //     if (b[isb]) {
//     //         b["d"] = b[isb]
//     // delete b["b"]

//     //     }

//     // }
//     const {b,...other} = y
//     return { ...a, ...other ,d:b }
// }

// console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }))



// function myfun(a,b){
  
//     return b/a*100
// }
// console.log(myfun(100,50))

function moveItem(array, currentIndex,move) {
    // Ensure the current index is within the array bounds
    if (currentIndex < 0 || currentIndex >= array.length || move == 0) {
      console.error("Invalid current index.");
      return array;
    }
    currentIndex = currentIndex - 1
  
    // Calculate new index based on the direction
    let newIndex = currentIndex + ( move > 0 ? move : -move);
    console.log(newIndex)
    // Ensure the new index wraps around the array bounds
    if (newIndex >= array.length) {
      newIndex = 0; // Wrap to the start
    } else if (newIndex < 0) {
      newIndex = array.length - 1; // Wrap to the end
    }
  
    // Move the item
    const [item] = array.splice(currentIndex, 1); // Remove item from the current position
    console.log(item)
    array.splice(newIndex, 0, item); // Insert item at the new position
  
    return array;
  }

  const myList = ['a', 'b', 'c', 'd', 'e'];

// console.log(moveItem(myList, 2,1)); // Moves 'c' forward: ['a', 'b', 'd', 'c', 'e']
console.log(moveItem(myList, 1,4));