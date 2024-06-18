import { bootstrapApplication } from '@angular/platform-browser';

// sans la ts extention
import { AppComponent } from './app/app.component';

//Ici, on dit à angular qu'il y a un AppComponent et qu'il doit chercher ce component tag dans le html.index
bootstrapApplication(AppComponent).catch((err) => console.error(err));
//Mauvaise pratique de rajouter d'autre component ici
// ==> car l'idée est de construire un arbre de component 
// Pour que les component de même niveau puisse communiquer entre eux et "changer des datas par exemple"
