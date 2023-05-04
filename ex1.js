/**
 * La sección de maternidad del Hospital de Bellvitge nos ha pedido una función para analizar los cromosomas de los gametos de las mujeres embarazadas en el hospital.
 *
 * En este caso, la célula espermática determina el sexo del individuo. Si una célula espermática que contiene un cromosoma X fertiliza un óvulo, el cigoto resultante será XX o hembra. Si la célula espermática contiene un cromosoma Y, entonces el cigoto resultante será XY o macho.
 *
 * Determine si el sexo de la descendencia será masculino o femenino en función del cromosoma X o Y presente en el esperma del hombre.
 *
 * Si el esperma contiene el cromosoma X, devuelva "¡Felicitaciones! Tendrás una hija."; Si el esperma contiene el cromosoma Y, devuelva "¡Felicitaciones! Tendrás un hijo.". Cualquier otra combinación no es posible, y deberíamos devolver un mensaje de esta forma: "Lo siento, el hijo no se llevará a termino."
 */

function chromosomeCheck(chromosomes) {
    switch(chromosomes){
        case 'XY':
            console.log('Felicitaciones! Tendrás un hijo.');
            break; 
        case 'XX':
            console.log('Felicitaciones! Tendrás una hija.');
            break;
        default:
            console.log('Lo sentimos, el hij@ no se llevará a término');
            break;
    }
}

console.log(chromosomeCheck("XY")); // "Felicitaciones! Tendrás un hijo."
console.log(chromosomeCheck("XX")); // "Felicitaciones! Tendrás una hija."
console.log(chromosomeCheck("YY")); // "Lo siento, el hijo no se llevará a término."
console.log(chromosomeCheck("AY")); // "Lo siento, el hijo no se llevará a término."
console.log(chromosomeCheck("QQ")); // "Lo siento, el hijo no se llevará a término."
