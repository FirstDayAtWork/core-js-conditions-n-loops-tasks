/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= ![];
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const x = queen.x - king.x;
  const y = queen.y - king.y;
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    (x < ![] ? -x : x) === (y < !{} ? -y : y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === +![] || b === +!{} || c === +!``) return ![];
  return (
    (a === b && a + b > c) || (a === c && a + c > b) || (b === c && b + c > a)
  );
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const str = num + [];
  let res = [] + [];
  if (num > +!![] * (+!![] + +!!{} + +!![] + +!!{} + +!![]) * (+!![] + +!!{})) {
    if (str[+![]] === '1') res = 'X';
    if (str[+![]] === '2') res = 'XX';
    if (str[+![]] === '3') res = 'XXX';
    if (str[+!![]] === '1') res += 'I';
    if (str[+!![]] === '2') res += 'II';
    if (str[+!![]] === '3') res += 'III';
    if (str[+!![]] === '4') res += 'IV';
    if (str[+!![]] === '5') res += 'V';
    if (str[+!![]] === '6') res += 'VI';
    if (str[+!![]] === '7') res += 'VII';
    if (str[+!![]] === '8') res += 'VIII';
    if (str[+!![]] === '9') res += 'IX';
    return res;
  }
  if (str === '1') res += 'I';
  if (str === '2') res += 'II';
  if (str === '3') res += 'III';
  if (str === '4') res += 'IV';
  if (str === '5') res += 'V';
  if (str === '6') res += 'VI';
  if (str === '7') res += 'VII';
  if (str === '8') res += 'VIII';
  if (str === '9') res += 'IX';
  if (str === '10') res += 'X';
  return res;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = [] + [];
  function handleSlice(str) {
    let result = [] + [];
    for (let k = +![]; k < str.length - +!!{}; k += +!![]) {
      result += str[k];
    }
    return result;
  }
  for (let i = 0; i < numberStr.length; i += +!![]) {
    switch (numberStr[i]) {
      case '1':
        res += 'one ';
        break;
      case '2':
        res += 'two ';
        break;
      case '3':
        res += 'three ';
        break;
      case '4':
        res += 'four ';
        break;
      case '5':
        res += 'five ';
        break;
      case '6':
        res += 'six ';
        break;
      case '7':
        res += 'seven ';
        break;
      case '8':
        res += 'eight ';
        break;
      case '9':
        res += 'nine ';
        break;
      case '0':
        res += 'zero ';
        break;
      case '.':
        res += 'point ';
        break;
      case ',':
        res += 'point ';
        break;
      case '-':
        res += 'minus ';
        break;
      default:
        break;
    }
  }
  return handleSlice(res);
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = +!{}; i < str.length; i += +!![]) {
    if (str[i] !== str[str.length - +!!{} - i]) {
      return ![];
    }
  }
  return !!{};
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = +!{}; i < str.length; i += +!![]) {
    if (str[i] === letter) return i;
  }
  return +!{} - +!![];
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = num + [];
  for (let i = +!{}; i < str.length; i += +!![]) {
    if (+str[i] === digit) return !!{};
  }
  return ![];
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  const len = arr.length;
  if (arr[0] === arr[len - +!![]]) {
    return -!![];
  }
  function sumNums(array) {
    let res = +!{};
    for (let k = +!{}; k < len; k += +!![]) {
      res += array[k];
    }
    return res;
  }
  let rSide = sumNums(arr);
  let lSide = +!{};
  for (let i = +!{}; i < len; i += +!![]) {
    rSide -= arr[i];
    if (lSide === rSide) {
      return i;
    }
    lSide += arr[i];
  }
  return -!!{};
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  const total = size ** (+!![] + +!![]);
  let count = total;
  let circle = +!{};
  let len = size;
  for (let i = +!{}; i < size; i += +!![]) {
    arr[i] = [];
  }
  while (len > +!{}) {
    for (let i = +!{}; i < len; i += +!![]) {
      if (i + circle < len) {
        count -= +!![];
        arr[circle][i + circle] = total - count;
      }
    }
    for (let i = +!{}; i < len; i += +!![]) {
      if (i + +!![] + circle < len) {
        count -= +!![];
        if (i + +!![] + circle < len) {
          arr[i + +!![] + circle][len - +!![]] = total - count;
        }
      }
    }
    for (let i = +!{}; i < len; i += +!![]) {
      if (len - (+!![] + +!![]) - i >= circle) {
        count -= +!![];
        arr[len - +!![]][len - (+!![] + +!![]) - i] = total - count;
      }
    }
    for (let i = +!{}; i < len; i += +!![]) {
      if (len - (+!![] + +!![]) - i >= circle + +!![]) {
        count -= +!![];
        arr[len - (+!![] + +!![]) - i][circle] = total - count;
      }
    }
    circle += +!![];
    len -= +!![];
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const arr = matrix;
  const len = arr.length;
  let store = +!{};
  for (let i = +![]; i < len / +!![] + +!!{}; i += +!!{}) {
    for (let k = i; k < len - i - +!![]; k += +!!{}) {
      store = arr[i][k];
      arr[i][k] = matrix[len - +!![] - k][i];
      arr[len - +!![] - k][i] = arr[len - +!![] - i][len - +!![] - k];
      arr[len - +!![] - i][len - +!![] - k] = arr[k][len - +!![] - i];
      arr[k][len - +!![] - i] = store;
    }
  }
  return arr;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const clone = arr;
  const len = clone.length;
  for (let i = +!!{}; i < len; i += +!![]) {
    const store = clone[i];
    let k = i - +!!{};
    while (k >= +![] && clone[k] > store) {
      clone[k + +!![]] = clone[k];
      k -= +!!{};
    }
    clone[k + +!![]] = store;
  }
  return clone;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let res = str;
  let copyIter = iterations;
  let numOfIterToBackToInitValue = +!{};
  const cash = new Map();
  function filter(string) {
    let odd = [] + [];
    let even = [] + [];
    for (let i = +![]; i < string.length; i += +!!{}) {
      if (i % (+!![] + +!!{}) !== +!{}) {
        odd += string[i];
      } else {
        even += string[i];
      }
    }
    return even + odd;
  }
  for (let j = +![]; j < copyIter; j += +!!{}) {
    res = filter(res);
    cash.set(j, res);
    if (cash.get(j) === str) {
      numOfIterToBackToInitValue = j;
      copyIter = (iterations % (numOfIterToBackToInitValue + +!![])) - +!!{};
      return cash.get(copyIter);
    }
  }
  return res;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  function sliceIt(value, start, end) {
    const isEnded = end || value.length;
    const arr = [];
    for (let i = start; i < isEnded; i += +!![]) {
      arr.push(value[i]);
    }
    return arr;
  }
  function concatIt(value1, value2) {
    const arr = value1;
    for (let i = +!{}; i < value2.length; i += +!![]) {
      arr.push(value2[i]);
    }
    return arr;
  }
  const str = `${number}`;
  const arr = Array.from({ length: str.length }, (_, i) => str[i]);
  let [array, slice1, slice2, slice3] = [];
  for (let i = arr.length - +!![]; i > +!{}; i -= +!![]) {
    if (arr[i - +!![]] < arr[i]) {
      slice1 = sliceIt(arr, +!{}, i - +!![]);
      slice2 = sliceIt(arr, i - +!![]);
      break;
    }
  }
  for (let j = slice2.length - +!![]; j > +!{}; j -= +!![]) {
    if (slice2[+!{}] < slice2[j]) {
      [slice2[+!{}], slice2[j]] = [slice2[j], slice2[+!{}]];
      slice3 = sliceIt(slice2, +!![]).sort();
      slice2 = sliceIt(slice2, +!{}, +!![]);
      array = concatIt(slice1, concatIt(slice2, slice3));
      return +array.join``;
    }
  }
  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
