/*
Написати функцію, яка приймає масив чисел
і повертає true, якщо в цьому масиві є два однакових числа поспіль
Якщо не має - повертає false, якщо масив порожній - теж повертає false


// [1,2,3,4,5]->false
// [1,2,2,3,2]->true
 */

/**
 * 
 * @param {[number]} arr 
 * @returns {boolean}
 */
function hasTwoIdenticalNumbers(arr) {
  if (arr.length === 0) return false;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === arr[index + 1]) return true;
  }
  return false;
}

// console.log(hasTwoIdenticalNumbers([1,2,2,3,2]));
// console.log(hasTwoIdenticalNumbers([1,2,3,4,5]));
// console.log(hasTwoIdenticalNumbers([2,4,5,6,4,6]));
// console.log(hasTwoIdenticalNumbers([]));
