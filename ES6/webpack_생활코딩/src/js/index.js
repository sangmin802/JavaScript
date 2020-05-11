import hello from './hello.js';
import world from './world.js';
import '../css/style.css';

document.querySelector('#root').innerHTML = `${hello} ${world}`;