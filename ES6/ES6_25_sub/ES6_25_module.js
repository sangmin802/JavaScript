import {_, MyLogger} from './ES6_25_myLogger.js';

const logger = new MyLogger();
const root = document.querySelector('#root');
root.innerHTML = `<p>Hello World!</p>`

_.log(logger.getLectures());
