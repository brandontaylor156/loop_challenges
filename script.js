console.log('Part 1:');
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

console.log('\nPart 2:');
for (let i = 100; i >= 0; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

console.log('\nPart 3:');
for (let i = 4; i >= -3.5; i-= 1.5) {
    console.log(i);
}

console.log('\nPart 4:');
var sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

console.log('\nPart 5:');
var product = 1;
for (let i = 1; i <= 12; i++) {
    product *= i;
}
console.log(product);