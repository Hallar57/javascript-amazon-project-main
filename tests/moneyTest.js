import {formatCurrency} from '../scripts/utils/money.js'

console.log('1')
formatCurrency(29934) === '299.34' ? console.log('pass') : console.log('fail');

console.log('2')
formatCurrency(0) === '0.00' ? console.log('pass') : console.log('fail');

console.log('3')
formatCurrency(2000.5) === '20.01' ? console.log('pass') : console.log('fail');
