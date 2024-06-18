import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';

@Component({
    //Quel élément Angular doit chercher dans l'html pour que c'est élément puisse remplacer par ce component et ce markup
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, UserComponent]
})
export class AppComponent {
    users = DUMMY_USERS

    onSelectUser(id: string) {
        console.log('Selected user with id ' + id)
    }
}
