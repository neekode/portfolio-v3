/** Current Problem:   INCOMPLETE!!
 * Determine whether or not the argued string, being parentheses are valid.
 *
 * ex. "()" returns true
 * "[[()]]" return true
 * "[{[()}}]" returns false
 */

/**
 * What can we ascertain from the problem?
 * 1. all valid parentheses have a pair. If the input string is
 * odd, we can immediately return false.
 *
 * 2. validity is based on halves of the given string.
 *
 * 3. I was wrong! we are not always splitting the string into halves.
 */
const validParentheses = function (s) {
        // let isValid = false
        // if (s.length % 2 > 0) {
        //     isValid = false;
        // } else {
        //     let arr1 = s.split('');
        //     let arr2 = [];
        //     let halfLength = arr1.length / 2;
        //
        //     for (let i = 0; i < halfLength; i++) {
        //         arr2.push(arr1.pop());
        //     }
        //
        //     for (let i = 0; i < arr2.length; i++) {
        //         switch (arr2[i]) {
        //             case '}':
        //                 arr2[i] = '{'
        //                 break;
        //             case ']':
        //                 arr2[i] = '['
        //                 break;
        //             case ')':
        //                 arr2[i] = '('
        //                 break;
        //         }
        //     }
        //
        //     let str = arr1.join('');
        //     let str2 = arr2.join('');
        //     if (str == str2) {
        //         isValid = true;
        //     }
        // }
        // ;

        // setSolution(isValid.toString());
    }
;


/** PlusOne:
 * You are given a large integer represented as an integer array digits,
 * where each digits[i] is the ith digit of the integer.
 * The digits are ordered from most significant to least significant
 * in left-to-right order. The large integer does not contain any leading 0's.
 */
    // BigInt Test
const test1 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
const plusOne = function (digits) {
    let asString = digits.join('');
    let asNumber;
    if (asString.length > 16) {
        // eslint-disable-next-line no-undef
        asNumber = BigInt(asString)
    } else {
        asNumber = parseInt(asString);
    }
    asNumber++;
    let asString2 = asNumber.toString();
    let asArray = asString2.split('');
    return asArray
};


// Well i did it!!! but this is pretty convoluted ahahah. I could have created a substring based on the current j
// position, and then compared that with the initial needle

/**
 *
 Implement strStr().

 Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 Clarification:

 What should we return when needle is an empty string? This is a great question to ask during an interview.

 For the purpose of this problem, we will return 0 when needle is an empty string. This i
 */

var strStr = function (hs, n) {
    let index = -1;
    if (n.length === 0) {
        index = 0;
        return index;
    }
    const hsArray = hs.split('');
    const nArray = n.split('');

    // The every() method can stop given a condition, and then
    // proceed given a condition. so this could be good
    // to compare the elements.

    // so with this we can figure out if there are exactly two L's
    // in the haystack. but it does not determine whether or not
    // they are sequential. this DOES determine whether or not
    // the needle is inside the haystack at all.
    // so with this we could return -1 if it comes back as false to get that scenario.
    nArray.every((el, i) => {
        for (let j = 0; j < hsArray.length; j++) {
            if (el === hsArray[j]) { // Here we find the first equal index.
                index = j;
                let equalCount = 0;
                while (equalCount < nArray.length) {
                    if (nArray[equalCount] === hsArray[j]) {
                        equalCount++;
                        j++;
                    } else {
                        break;
                    }
                }

                if (equalCount < nArray.length) {
                    j = index++
                    index = -1;
                } else if (equalCount === nArray.length) {
                    return false;
                }
            }
        }
        return false;
    });
    return index;
};