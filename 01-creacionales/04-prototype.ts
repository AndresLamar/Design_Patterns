/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.gu ru/es/design-patterns/prototype
 */

class Document {
    public title: string;
    private content: string;
    public author: string;

    constructor(title: string, content: string, author: string){
        this.title = title;
        this.content = content;
        this.author = author;
    }

    clone(): Document{
        return new Document(this.title, this.content, this.author);
    }

    diplayInfo(){
        console.log(`
            Title: ${this.title}    
            Content: ${this.content}    
            Author: ${this.author}    
        `);
    }
}

function main() {
    const documento1 = new Document('Cotizacion', '500 dólares', 'Fernando');
    
    console.log({documento1});
    documento1.diplayInfo();
    
    const documento2 = documento1.clone();
    documento2.title = 'Nueva cotización';
    
    console.log({documento2});
    documento2.diplayInfo();
}

main();