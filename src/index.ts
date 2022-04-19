import now from 'performance-now';

import { calculate } from './calculate';
import { calculateSuperFatorial } from './calculateSuperFatorial';

//Calculate with the default implementation, simple code just loops through
const startTime = now();
const result = calculate(5);
const end = now();

//Calculate the dynamic implementation
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
