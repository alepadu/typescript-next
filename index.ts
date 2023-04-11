// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
const appDiv2: HTMLElement = document.getElementById('app2');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
appDiv2.outerHTML = `<h2>Ciao!</h2>`;
