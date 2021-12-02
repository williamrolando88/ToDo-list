import { arr } from './array';
import './styles.scss';

console.log('Hello world!');

const arrA = [1, 2, 3, 4, 5];
const arrB = [...arrA, 6, 7, ...arr];

document.querySelector('div').textContent = arrB;
