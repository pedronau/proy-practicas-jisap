import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class General {
    private usuario = [{
        id: '',
        userName: '',
    }];

    constructor() {
        const users = localStorage.getItem('users');
        if(users) {
            this.usuario = JSON.parse(users);
        }
    }

    addUser(usuario: []) {
        this.usuario.push({
            id: new Date().getTime().toString(),
            userName: '',
        });
        this.addLocal();
        console.log('Estoy funcionando');
    }

    addLocal() {
        localStorage.setItem('users', JSON.stringify(this.usuario));
    }

}

//la idea es que metas un usuario, se abran las preguntas, respondas y se gaurde cuantas tienes bien y un comentario y luego eso
//se añada a un ranking que se ordene por el que mas bien tiene y que aparezca el comentario