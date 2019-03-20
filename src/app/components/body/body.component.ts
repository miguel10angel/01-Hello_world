import { Component } from '@angular/core'

@Component({
        selector:'app-body',
        templateUrl: './body.component.html'
})
export class BodyComponent{
    mostrar=true;
    frase:any={
        mensaje: "un gran poder requiere una gran responsavilidad",
        autor: "Ben Parker"
    }

    personajes:string[]=["spiderman", "venom", "Octopus"];
}
