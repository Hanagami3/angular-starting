import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  // ? == ça peut ne as être "setté", je suis au courant
  //MNT c'est à nous d'être certain d'utiliser cela alors qu'il est "setté"
  @Input() name?: string
  //autre manière aussi util pour permettre de mettre plusieur possible type
  @Input() name1: string | undefined
 

}
