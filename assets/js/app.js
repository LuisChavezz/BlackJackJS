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
const createDeck = () => { // Creará el mazo inicial de juego.
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

    return  _.shuffle( deck ); // Reordena los elementos dentro del array de forma aleatoria.
}

console.log( createDeck() );