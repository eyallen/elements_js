import { log_binary } from '../Helpers/logging.js';

function reverse_bits(number) {
    const lookup = {
        0b00: 0b00,
        0b01: 0b10,
        0b10: 0b01,
        0b11: 0b11
    };

    let result = 0;

    // Assumes 16 bit integer
    result = lookup[(number) & 0b11];
    result = (result << 2) | lookup[(number >> 2) & 0b11];
    result = (result << 2) | lookup[(number >> 4) & 0b11];
    result = (result << 2) | lookup[(number >> 6) & 0b11];
    result = (result << 2) | lookup[(number >> 8) & 0b11];
    result = (result << 2) | lookup[(number >> 10) & 0b11];
    result = (result << 2) | lookup[(number >> 12) & 0b11];
    result = (result << 2) | lookup[(number >> 14) & 0b11];

    return result;
}

let input = 0b1000100010111111; // 1111110100010001
let output = reverse_bits(input);
log_binary(output);