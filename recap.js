const hubby = 'sone';

console.log(hubby);

let phone = 'iphone';
phone = 'samsung galaxy s17';
const myNotes = `I am mojnu of ${hubby}. i have a new ${phone}`
console.log(myNotes);

function max(array = [324, 454, 57]) {
    const max = Math.max(...array);
    return max;
}
const biggest = max();
console.log(biggest);

//arrow function 
const square = x => x * x;
console.log(square(8))