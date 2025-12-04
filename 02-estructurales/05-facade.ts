/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */

import { COLORS } from "../helpers/colors.ts";

class Projector {
    turnOn(){
        console.log('Proyector: Encendiendo');
    }

    turnOff(){
        console.log('Proyector: Apagando');
    }
}

class SoundSystem {
    on(){
        console.log('Sistema de sonido: Encendiendo');
    }

    off(){
        console.log('Sistema de sonido: Apagando');
    }
}

class VideoPlayer {
    on(){
        console.log('Video Player: Encendiendo');
    }

    play(movie: string){
        console.log(`Video Player: Reproduciendo %c${movie}`, COLORS.green);
    }

    stop(){
        console.log('Pelicula detenida');
        
    }

    off(){
        console.log('Video Player: Apagando');
    }
}

class PopcornMaker {
    poppingPopCorn(){
        console.log('Haciendo palomitas de maíz');
    }

    turnOffPoppingPopCorn(){
        console.log('Palomitas de maíz detenidas');
    }
}

interface HomeTheaterFacadeOptions {
    projector: Projector;
    soundSystem: SoundSystem;
    videoPlayer: VideoPlayer;
    popcornMaker: PopcornMaker;
}

class HomeTheaterFacade {
    private projector: Projector;
    private soundSystem: SoundSystem;
    private videoPlayer: VideoPlayer;
    private popcornMaker: PopcornMaker;

    constructor({projector, soundSystem, videoPlayer, popcornMaker}: HomeTheaterFacadeOptions){
        this.projector = projector;
        this.soundSystem = soundSystem;
        this.videoPlayer = videoPlayer;
        this.popcornMaker = popcornMaker;
    }

    watchMovie(movie: string): void {
        console.log(`\n%cIniciando la pelicula %c${movie}...`, COLORS.cyan, COLORS.white);
        this.projector.turnOn();
        this.soundSystem.on();
        this.popcornMaker.poppingPopCorn();
        this.videoPlayer.on();
        this.videoPlayer.play(movie);

        console.log('%cDisfruta la pelicula', COLORS.green);
    }

    endWatchingMovie(): void {
        console.log('\n%cFinalizando la pelicula...', COLORS.red);
        this.videoPlayer.stop();
        this.videoPlayer.off();
        this.popcornMaker.turnOffPoppingPopCorn();
        this.soundSystem.off();
        this.projector.turnOff();

        console.log('%cPelicula finalizada', COLORS.red);
    }

}

function main() {

    const projector = new Projector();
    const soundSystem = new SoundSystem();
    const videoPlayer = new VideoPlayer();
    const popcornMaker = new PopcornMaker();

    const homeTheaterFacade = new HomeTheaterFacade({projector, soundSystem, videoPlayer, popcornMaker});

    homeTheaterFacade.watchMovie('Avengers: Endgame');
    homeTheaterFacade.endWatchingMovie();
}

main();
