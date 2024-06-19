import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
    //Quel élément Angular doit chercher dans l'html pour que c'est élément puisse remplacer par ce component et ce markup
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf]
})
export class AppComponent {
    users = DUMMY_USERS
    //Dans l'html, le app-component ne contient pas de valeur et l'afficher sans valeur n'est pas une bonne pratique
    //Donc condition dans l'html
    selectedUserId?: string

    get selectedUser(){
        //avec ts, il faut être clair avec quel type de valeur va ou donc utimlisation de "!"
        return this.users.find((user) => user.id === this.selectedUserId)//! ==> on l'a géré directment dans html avec ? 
    }

    onSelectUser(id: string) {
        this.selectedUserId = id
    }
}
