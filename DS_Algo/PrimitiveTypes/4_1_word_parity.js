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

let binary = 0b1011;
let result_brute = parity_brute(binary);
console.log('brute: ' + result_brute);

binary = 0b1000100;
result_brute = parity_brute(binary);
console.log('brute: ' + result_brute);