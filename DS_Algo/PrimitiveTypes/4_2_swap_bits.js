import { log_binary } from '../Helpers/logging.js'

function swap_bits(number, i, j) {
    // Bounds check here.

    // First compare the ith and jth position, and just return if they are the same.
    let ith = number >> i & 1;
    let jth = number >> j & 1;

    if (ith === jth) {
        return number;
    }

    // Otherwise mask the ith and jth position and XOR to bit flip
    let i_mask = 0b1 << (i - 1);
    let j_mask = 0b1 << (j - 1);

    let mask = i_mask | j_mask;

    return number ^ mask;
}

let binary = 0b101010;
let output = swap_bits(binary, 5, 6);
log_binary(output);