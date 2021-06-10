/*
    C = treboles
    H = corazones
    D = diamantes
    S = espadas
*/

/* Declaraciones */
const cardTypes     = ['C', 'D', 'H', 'S'];
const specialCards  = ['A', 'K', 'Q', 'J'];
let deck            = [];


/* Funciones */

// Crear deck inicial de la partida
const createDeck = () => { 
    for( let i = 2; i <= 10; i++ ) { 

        for( let type of cardTypes ) {
            deck.push( i + type ); // Guardará el nombre de cada carta (2H, 10C, ...)
        }
    }

    for( let special of specialCards ) {

        for( let type of cardTypes ) {
            deck.push( special + type ); // Guardará el nombre de cada carta especial (AH, KC, ...)
        }
    }

    deck = _.shuffle( deck ); // Reordena los elementos dentro del array de forma aleatoria.

    return deck;  
}

// Tomar carta del deck
const drawCard = () => ( deck.pop() ); // Retorna el último elemento eliminado del array 'deck'


// Valor de cada carta
const cardValue = ( card ) => { // (el parámetro a recibir será lo que retorne la funcion 'drawCard')
    const valor = card.substring( 0, card.length - 1 ); // guarda los caracteresd el string a partir de x posición. A excepción del último caracter ( .length-1 )

    return ( isNaN( valor ) ) ? // (Condiciones explicadas de manera tradicional abajo)
                (( valor === 'A' ) ? 11 : 10 ) 
                : parseInt( valor );
                

    /*if( isNaN( valor ) ) { // Sí 'valor' no es un número.
        pts = ( valor === 'A' ) ? 11 : 10; // Sí el valor de la carta es una 'Ace' asigna 11 pts, 
            //si no es un 'Ace' se asignarán 10 pts (porque significa que son (J, Q o K))
    
    } else { // Sí 'valor es un número
        pts = parseInt( valor ); // Convierte los caracteres de número a número entenro.
    }*/
}



createDeck();
//console.log( drawCard() );
//console.log( deck );
console.log( cardValue( drawCard() ) );
