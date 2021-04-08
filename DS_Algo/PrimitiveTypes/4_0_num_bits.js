function num_bits(x) {
    let count = 0;
    while (x) {
        count += x & 1;
        x = x >> 1;
    }

    return count;
}

let number = 0b101101;
let result = num_bits(number);

console.log(result);