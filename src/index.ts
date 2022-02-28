import { Nullable } from './@types'

// Linear Search
const array1 = [1, 3, 6, 4, 2, 1, 3, 5, 7]
let count = 0

function linearSearch(array: Array<number>, number: number): Nullable<number> {
  for (let i = 0; i < array.length; i++) {
    count += 1
    if (array[i] === number) return i
  }
  return null
}

console.log(linearSearch(array1, 6))
console.log(`count: ${count}`)
// End Linear Search

// Binary Search
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
let count2 = 0

function binarySearch(array: Array<number>, number: number): number {
  let start = 0
  let end = array.length
  let middle: number
  let found = false
  let position = -1
  while (found === false && start <= end) {
    count2 += 1
    middle = Math.floor((start + end) / 2)
    if (array[middle] === number) {
      found = true
      position = middle
      return position
    }
    if (number < array[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }
  return position
}

console.log(binarySearch(array2, 8))
console.log(`count2: ${count2}`)
// End Binary Search

// // Sort
// const array3 = [1, 3, 6, 4, 2, 1, 3, 5, 7]
// let count3 = 0

// function customSort(array: Array<number>, number: number): Nullable<number> {
//   for (let i = 0; i < array.length; i++) {
//     count3 += 1
//     if (array[i] === number) return i
//   }

//   return null
// }

// console.log(customSort(array3, 6))
// console.log(`count: ${count3}`)
// // End Sort
