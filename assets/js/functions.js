
    /* Funciones */

    // Inicializa el juego barajeando el deck
    const startGame = () => {
        deck = createDeck();
    }

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

        return _.shuffle( deck ); // Reordena los elementos dentro del array de forma aleatoria. 
    }

    // Tomar carta del deck
    const drawCard = () => ( deck.pop() );


    // Valor de cada carta
    const cardValue = ( card ) => { // (el parámetro a recibir será lo que retorne la funcion 'drawCard')
        const valor = card.substring( 0, card.length - 1 ); // guarda los caracteresd el string a partir de x posición. A excepción del último caracter ( .length-1 )

        return ( isNaN( valor ) ) ? // (Condiciones explicadas de manera tradicional abajo)
                    (( valor === 'A' ) ? 11 : 10 ) 
                    : parseInt( valor );
    }

    const showCards = ( card, divCards ) => { // Creación del elemento HTML de la carta

        const imgCard   = document.createElement( 'img' ); // Crear el elemento HTML de una imagen
        imgCard.src     = `assets/img/cartas/${ card }.png`; // Añade la ruta de donde traerá la imagen de la carta
        imgCard.classList.add('card'); // Añade la clase para los estilos CSS
        divCards.append( imgCard ); // Adjunta el nuevo elemento HTML al contenedor de las cartas
    }

    const cpuTurn = ( minPTS ) => { // El turno de la computadora
        do{
            const card = drawCard();

            ptsCPU = ptsCPU + cardValue( card ); // Asignará el valor de la carta robada, a los pts del jugador
            puntosCPU.innerText = ptsCPU;

            showCards( card, cpuCards );

        } while( (ptsCPU < minPTS) && (minPTS <= 21) );

        setTimeout(() => { // Ejecuta los alerts después de terminar el ciclo.
            if( ptsCPU > 21 ) {
                ( ptsPlayer == 21 ) ? alert('Felicidades, tienes 21 pts! ERES EL GANADOR.')  : alert('Felicidades, ERES EL GANADOR.');
            }
            else if( (ptsCPU > ptsPlayer) && (ptsPlayer < 21) ){
                alert('HAS PERDIDO.');
            }
            else if( ptsPlayer > 21 ){
                alert('Superaste los 21 pts, HAS PERDIDO'); 
            }
            else if( ptsCPU == ptsPlayer ){
                ( ptsCPU == 21 && ptsPlayer == 21) ? alert('EMPATE, ambos tienen 21 pts') : alert('EMPATE');
            }
        }, 200); //milisegundos
    }

    const hola = ()  => {
        console.log('hola');
    }