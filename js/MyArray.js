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
    if(value.length === 0) return this;
    for (let index = 0; index < value.length; index++) {
      array[this.length + index] = value[index];
    }
    return array;
  };
  this.slice = function (end, begin = 0) {
    let array = [];
    for (let index = 0; index < this.length; index++) {
      array[index] = this[index];
    }
    console.log(begin);
    console.log(end);
    console.log(end - begin);
    const length = end - begin;
    if(!length) return this;
    let newArr = [];
    for (let index = 0; index < length; index++) {
        newArr[index] = array[begin+index];
    }
    return newArr;
  };
  this.splice = function () {};
  this.reduce = function () {};
}

//constructor with data
function MyArray() {
  this.length = 0;
  for (let index = 0; index < arguments.length; index++) {
    this.push(arguments[index]);
  }
}
MyArray.prototype = new MyArrayPrototype();

const MyArrayNumbers = new MyArray(1,6,8,9);
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
console.log(MyArrayNumbers.slice(2));
console.log(MyArrayNumbers);

const arrayNumbers = [1,6,8,9];
// console.log(arrayNumbers.pop());
// console.log(arrayNumbers.indexOf(6));
// console.log(arrayNumbers.lastIndexOf(6));
// console.log(arrayNumbers.includes(43));
// console.log(arrayNumbers.find(el => el < 0));
// console.log(arrayNumbers.shift());
// console.log(arrayNumbers.concat([7,9]));
// console.log(arrayNumbers);
console.log(arrayNumbers.slice(2));
console.log(arrayNumbers);
