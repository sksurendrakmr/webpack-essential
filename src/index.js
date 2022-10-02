import {add, multiply} from './math'
import { prefixDecorate } from './StringUtil';
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

const WelcomeMessageText = WelcomeMessage({person:"suri"});

//Now we have the access of document as we have an HTML file and with HTML file, we alrady have a DOM with us.
const WelcomeMessageDiv = document.createElement('div');
WelcomeMessageDiv.innerText = WelcomeMessageText;
document.body.appendChild(WelcomeMessageDiv);

/**
 * First thing webpack is complaining that where is prefixDecorate() i.e StringUtil file.
 * 
 * But if we add .ts extention while importing the function i.e.
 * import { prefixDecorate } from './StringUtil.ts';
 * 
 * Then we will get a suggestion that we need an appropriate loader
 */
console.log(prefixDecorate("Hello, webpack")); //throw error
