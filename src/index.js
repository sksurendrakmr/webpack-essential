import {add, multiply} from './math'
import { WelcomeMessage } from './WelcomeMessage/WelcomeMessage';
/**
 * we will get error while importing the css.
 * 
 * When webpack try to build the dependency graph and when it encounter 
 * this line where we are importing the css.
 * 
 * Webpack will throw an error : -> you may need an appropriate loader.
 * as right now webpack will not understand the css import statement.
 */
import './WelcomeMessage/WelcomeMessage.css'
console.log("Running webpack!!!");
console.log(add(3,4));


/**
 * Right now, we can't use html from js file as it will run the code in node
 * environment and node doesn't have access to document.
 * 
 * Only browser has access to document.
 */

const WelcomeMessageDiv = WelcomeMessage({person:"suri"});
console.log(WelcomeMessageDiv);