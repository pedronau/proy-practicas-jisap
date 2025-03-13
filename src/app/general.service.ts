import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class General {

    private usuario: string = '';


    addUser() {
        this.usuario = 'paco';
        console.log('Estoy funcionando');
    }



}

//la idea es que metas un usuario, se abran las preguntas, respondas y se gaurde cuantas tienes bien y un comentario y luego eso
//se añada a un ranking que se ordene por el que mas bien tiene y que aparezca el comentario