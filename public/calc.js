
function isTruthy(){
    let val1 = document.querySelector( '#value1' ).value;
    let val2 = document.querySelector( '#value2' ).value;

    console.log( val1, val2 );

    try {
        val1 = eval( val1 );
    } catch (e) {}

    try {
        val2 = eval( val2 );
    } catch (e) {}

    console.log( val1 == val2 );
    document.querySelector( '#result' ).textContent = ( val1 == val2 );
}

document.querySelector( '#button' ).onclick = isTruthy;
