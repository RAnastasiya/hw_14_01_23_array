// constructor for prototype
function MyArrayPrototype() {
  this.push = function () {
    for (let index = 0; index < arguments.length; index++) {
      this[this.length++] = arguments[index];
    }
    return this.length;
  };
  this.pop = function () {
    if (this.length === 0) return;
    const lastItem = this[--this.length];
    delete this[this.length];
    return lastItem;
  };
  this.indexOf = function (element) {
    for (let index = 0; index < this.length; index++) {
      if (this[index] === element) return index;
    }
    return -1;
  };
  this.lastIndexOf = function (element) {
    for (let index = this.length; index >= 0; --index) {
      if (this[index] === element) return index;
    }
    return -1;
  };
  this.includes = function (element) {
    for (let index = 0; index < this.length; index++) {
      if (this[index] === element) return true;
    }
    return false;
  };
  this.find = function (func) {
    for (let index = 0; index < this.length; index++) {
      if (func(this[index])) return this[index];
    }
    return;
  };
  this.findIndex = function () {
    for (let index = 0; index < this.length; index++) {
      if (func(this[index])) return index;
    }
    return;
  };
  this.shift = function () {
    console.log(this);
    if (this.length === 0) return;
    const firstElement = this[0];
    delete this[0];
    return firstElement;
  };
  this.concat = function (value) {
    let array = [];
    for (let index = 0; index < this.length; index++) {
      array[index] = this[index];
    }
    if (value.length === undefined) {
      array[array.length] = value;
      return array;
    }
    if (value.length === 0) return this;
    for (let index = 0; index < value.length; index++) {
      array[this.length + index] = value[index];
    }
    return array;
  };
  this.slice = function (begin = 0, end = 0) {
    let array = [];
    let newArr = [];
    for (let index = 0; index < this.length; index++) {
      array[index] = this[index];
    }
    if (begin > this.length) return [];
    if (begin == 0 && end === 0) return this;
    if (begin < 0) {
      const length = begin * -1;
      const newBegin = this.length - length;
      for (let index = 0; index < length; index++) {
        newArr[index] = array[newBegin + index];
      }
      return newArr;
    }
    if (end < 0) {
      const length = this.length + end - 2;
      for (let index = 0; index < length; index++) {
        newArr[index] = array[begin + index];
      }
    }
    const length = end == 0 ? begin + 1 : end - begin;
    for (let index = 0; index < length; index++) {
      newArr[index] = array[begin + index];
    }
    return newArr;
  };
  this.splice = function () {};
  this.reduce = function () {};
  this.reverse = function () {
    const newArr = new MyArray();
    for (let index = this.length; index > 0; index--) {
      newArr[this.length - index] = this[index - 1];
    }
    for (let index = 0; index < this.length; index++) {
      this[index] = newArr[index];
    }

    return this;
  };
}

//constructor with data
function MyArray() {
  this.length = 0;
  for (let index = 0; index < arguments.length; index++) {
    this.push(arguments[index]);
  }
}
MyArray.prototype = new MyArrayPrototype();

const MyArrayNumbers = new MyArray(1, 2, 3, 4, 5, 6, 7);
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7];

// MyArrayNumbers.push(777, 333);
// console.log(MyArrayNumbers);
// MyArrayNumbers.pop();
// console.log(MyArrayNumbers.pop());
// console.log(MyArrayNumbers.indexOf(6));
// console.log(MyArrayNumbers.lastIndexOf(3));
// console.log(MyArrayNumbers.includes(34));
// console.log(MyArrayNumbers.find(el => el < 0));
// console.log(MyArrayNumbers.shift());
// console.log(MyArrayNumbers.concat([7,9]));
// console.log(MyArrayNumbers);
// console.log(MyArrayNumbers.slice(2));
// console.log(MyArrayNumbers.slice(2, 4));
// console.log(MyArrayNumbers.slice(1, 5));
// console.log(MyArrayNumbers.slice(-2));
// console.log(MyArrayNumbers.slice(2, -4));
// console.log(MyArrayNumbers.slice());
console.log(MyArrayNumbers.reverse());
console.log(MyArrayNumbers);

// console.log(arrayNumbers.pop());
// console.log(arrayNumbers.indexOf(6));
// console.log(arrayNumbers.lastIndexOf(6));
// console.log(arrayNumbers.includes(43));
// console.log(arrayNumbers.find(el => el < 0));
// console.log(arrayNumbers.shift());
// console.log(arrayNumbers.concat([7,9]));
// console.log(arrayNumbers);
// console.log(arrayNumbers.slice(2, 4));
// console.log(arrayNumbers.slice(1, 5));
// console.log(arrayNumbers.slice(-2));
// console.log(arrayNumbers.slice(2, -1));
// console.log(arrayNumbers.slice());
console.log(arrayNumbers.reverse());
console.log(arrayNumbers);
