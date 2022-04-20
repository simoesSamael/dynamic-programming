import now from 'performance-now';

import { superCalculateFatorial } from './calculate';
import { calculateSuperFatorial } from './calculateSuperFatorial';

// Calculate the superFatorial with the default implementation, simple code just loops through
// Mostly get the current time by the now moto
// Right after I perform the calculation, passing the value 5 and saving the value in the variable
// Here I get the current time after running all the calculation saved as end time
const startTime = now();
const result = superCalculateFatorial(5);
const end = now();

//Calculate the fatorial dynamic implementation

const vlStartTime = now();
const vlCalculateFatorial = calculateSuperFatorial();
const resultCalculateFatorial = vlCalculateFatorial(5);
const vlEndTime = now();

//END Result
console.log(` ---- Implementation ---- `);
console.log(` Result: ${result} `);
console.log(` Time: ${(end - startTime).toFixed(4)}ms `);

console.log(' ');
console.log(' ');

console.log(`--- Memory implementation ---`);
console.log(`Result: ${resultCalculateFatorial}`);
console.log(`Time: ${(vlEndTime - vlStartTime).toFixed(4)}ms`);
