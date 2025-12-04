/**
 * ! Patrón Proxy
 * Este patrón se utiliza para controlar el acceso a un objeto, es decir,
 * se crea un objeto que actúa como intermediario entre el cliente y el objeto real.
 *
 * * Es útil cuando necesitamos controlar el acceso a un objeto,
 * * por ejemplo, para verificar si el cliente tiene permiso
 * * para acceder a ciertos métodos o propiedades.
 *
 * https://refactoring.guru/es/design-patterns/proxy
 *
 */

import { COLORS } from "../helpers/colors.ts";

class Player {
    constructor(public name: string, public level: number){}
}

interface Room {
    enter(player: Player): void;
}

class SecretRoom implements Room {
    enter(player: Player): void {
        console.log(`%cBienvenido a la sala secret ${player.name}`, COLORS.green);
        console.log('Un gran enemigo te espera');
        
    }
}

// Clase Proxy - Magic Portal
class MagicPortal implements Room {
    private room: Room;

    constructor(room: Room){
        this.room = room;
    }

    enter(player: Player): void {
        if(player.level >= 10){
            this.room.enter(player);
            return;
        } 
        console.log(`%cAcceso denegado. ${player.name}, no tienes nivel suficiente para entrar a la sala secret. Necesitas nivel 10.`, COLORS.red);
    }
}

function main() {
    const secretRoom = new SecretRoom();
    const magicPortal = new MagicPortal(secretRoom);

    const player1 = new Player('Juan', 5);
    const player2 = new Player('Ana', 10);
    const player3 = new Player('Pedro', 15);

    console.log('Intento de acceso del jugador 1:');
    magicPortal.enter(player1);

    console.log('\nIntento de acceso del jugador 2:');
    magicPortal.enter(player2);
    
    console.log('\nIntento de acceso del jugador 3:');
    magicPortal.enter(player3);
}

main();