import now from 'performance-now';

import { calculateSuperFatorial } from './calculateSuperFatorial';
import { calculate } from './calculate';

const startTime = now();
const result = calculate(5);
const end = now();

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

