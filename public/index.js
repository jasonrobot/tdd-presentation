import {
    shorten,
} from './shorten.js';

function getInput() {
    return document.querySelector( '#link' ).value;
}

function writeOutput( output = 'Unable to shorten link!' ) {
    document.querySelector( '#result' ).textContent = output;
}

function clickHandler() {
    writeOutput( shorten( getInput() ) );
}

document.querySelector( '#button' ).onclick = clickHandler;
