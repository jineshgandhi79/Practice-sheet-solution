
// 1. Reverse Array
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) { 
        reversed.push(arr[i]);
    }
    return reversed;
}

// 2. Remove Duplicates
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

// 3. Find Maximum
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// 4. Sum of Elements
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// 5. Flatten Nested Arrays
function flattenArray(arr) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            ans = ans.concat(flattenArray(arr[i])); 
        } else {
            ans.push(arr[i]); 
        }
    }
    return ans;
}

// 6. Merge Two Objects
function mergeObjects(obj1, obj2) {
    let merged = {};
    for (let key in obj1) {
        merged[key] = obj1[key];
    }
    for (let key in obj2) {
        merged[key] = obj2[key];
    }
    return merged;
}

// 7. Count Properties
function countProperties(obj) {
    let count = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++;
        }
    }
    return count;
}

// 8. Deep Clone an Object
function deepClone(obj) {
    let clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            clone[key] = deepClone(obj[key]);
        } else {
            clone[key] = obj[key];
        }
    }
    return clone;
}

// 9. Filter Object by Keys
function filterByKeys(obj, keys) {
    let filtered = {};
    for (let i = 0; i < keys.length; i++) {
        if (obj.hasOwnProperty(keys[i])) {
            filtered[keys[i]] = obj[keys[i]];
        }
    }
    return filtered;
}

// 10. Swap Keys and Values
function swapKeysAndValues(obj) {
    let swapped = {};
    for (let key in obj) {
        swapped[obj[key]] = key;
    }
    return swapped;
}

// 11. Reverse String
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// 12. Count Vowels
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}

// 13. Check Palindrome
function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// 14. Remove Whitespaces
function removeWhitespaces(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i];
        }
    }
    return result;
}

// 15. Capitalize Every Word
function capitalizeWords(str) {
    let words = str.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        result += word.charAt(0).toUpperCase() + word.slice(1);
        if (i !== words.length - 1) {
            result += ' ';
        }
    }
    return result;
}

// 16. Predict Output
function predictOutput() {
    console.log(a); // undefined
    var a = 10;
}

// 17. Scope Example
function checkScope() {
    if (true) {
        var a = 'var scoped';
        let b = 'let scoped';
        const c = 'const scoped';
    }
    console.log(a); // var scoped
    // console.log(b); // Error: b is not defined
    // console.log(c); // Error: c is not defined
}

// 18. Hoisting of Functions
function hoistingExample() {
    greet(); // 'Hello!'
    function greet() {
        console.log("Hello!");
    }
}

// 19. Hoisting with let and var
function hoistingWithLetVar() {
    //console.log(a); // Error: Cannot access 'a' before initialization
    //console.log(b); // undefined
    let a = 10;
    var b = 20;
}

// 20. Temporal Dead Zone
function temporalDeadZone() {
    //console.log(a); // Error: Cannot access 'a' before initialization
    let a = 10;
    console.log(a); // 10
}

// 21. Reassign let, var, and const
function reassignVariables() {
    var x = 10;
    let y = 20;
    const z = 30;

    x = 15; // allowed
    y = 25; // allowed
    // z = 35; // Error: Assignment to constant variable.
}

// 22. Variable Shadowing
function variableShadowing() {
    let a = 10;
    if (true) {
        let a = 20; // Shadowed
        console.log(a); // 20
    }
    console.log(a); // 10
}

// 23. Global Scope vs Local Scope
var globalVar = 'I am global';
function localScope() {
    var localVar = 'I am local';
    console.log(globalVar); // I am global
    //console.log(localVar); // Error: localVar is not defined
}

// 24. Block Scope with let
function blockScopeWithLet() {
    if (true) {
        let a = 10;
        console.log(a); // 10
    }
    // console.log(a); // Error: a is not defined
}

// 25. Differences between var, let, and const
function varLetConstDifferences() {
    var x = 1;
    let y = 2;
    const z = 3;

    x = 10; // allowed
    y = 20; // allowed
    // z = 30; // Error: Assignment to constant variable
}

// 26. Use map to Transform Array (without map)
function doubleNumbers(nums) {
    let doubled = [];
    for (let i = 0; i < nums.length; i++) {
        doubled.push(nums[i] * 2);
    }
    return doubled;
}

// 27. Use filter to Remove Falsey Values (without filter)
function filterFalsey(arr) {
    return arr.filter(Boolean);
}

// 28. Find Object in Array (without find)
function findUser(users, name) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            return users[i];
        }
    }
    return null;
}

// 29. Use reduce to Sum Array Elements (without reduce)
function sumArrayWithReduce(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

// 30. Check All Even Numbers using every (without every)
function allEven(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
}
