/**
 * Computes the parity of an int via a naive brute force approach.
 * @param {Integer} x 
 * @returns 
 */
function parity_brute(x) {
    let result = 0;
    while (x) {
        result ^= x & 1;
        x = x >> 1;
    }
    return result;
}

function parity_quick(x) {
    let result = 0; 

    result = x ^ (x  >> 1);
    result = result ^ (result >> 2);
    result = result ^ (result >> 4);
    result = result ^ (result >> 8);
    result = result ^ (result >> 16);
    result = result ^ (result >> 32);

    return result & 1;
}

let binary = 0b1011;
let result_brute = parity_brute(binary);
let result_quick = parity_quick(binary);

console.log('brute: ' + result_brute);
console.log ('quick:' + result_quick);

binary = 0b1000100;
result_brute = parity_brute(binary);
result_quick = parity_quick(binary);

console.log('brute: ' + result_brute);
console.log ('quick:' + result_quick);