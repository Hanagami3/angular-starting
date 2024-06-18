import { Component } from "@angular/core";
// public is the default value


//decorator is use for add metadata & configuration to classes + autre
@Component({
    //Si nom simple (sans '-') on peut rentre en conflit avec des built-elements comme "header", 
    selector: 'app-header',
    standalone: true,
    //possibilité de tmplate avec direct le code html mais pas très lisible
    templateUrl: './header.component.html',
    // ancienne version avec styleUrls with [];
    // ou styles :['h1 { color: red}] ==> en une seule
    styleUrl: './header.component.css'  
})

//Often define classes wich are NEVER instantiad by us
//Car c'est angular qui le fera à la fin
export class HeaderComponent {}