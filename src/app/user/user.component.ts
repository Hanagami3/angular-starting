import { Component, computed, signal, Input, input, Output, EventEmitter } from '@angular/core';
//input == decorater and input is a special function
import { DUMMY_USERS } from '../dummy-users';


//Avec angular on ne divise pas sumplement sa page en block mais on peut fair en sorte de réutiliser ses block si on en a besoin
//Par exemple User component oeut être réutiliser avec différentes data
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required: true}) id!:string

  //typescript veut savoir le type de la valeur
  //Et veut aussi l'initialiser car ne comprend pas que c'est "initialisé" avec angular
  //Avec la feature de ts "!" on dit que ça sera bien initialisé même si ts ne peux pas le voir dans ce code
  @Input({required: true}) avatar!: string 
  //required oblige à tout compléter dans l'html sinon onderstreep dans html dans la tag qui utilise user
  @Input({required: true}) name!: string
  @Output() select = new EventEmitter()

  get imagePath() {
    return 'assets/users/' + this.avatar
  }

  onSelectUser(){
    this.select.emit(this.id)
  }
}

/*
export class UserComponent {
  //empty string est une valeur par défaur si il n'y a pas de valeur
  //<>type qui sera éventuellement reçue par l'input qui est un ts generic
  //si .requiered pas d valeur par défaut
  // Pas besoin des ! (non signal) car avatar a bien une valeur mnt
  avatar = input.required<string>()
  name = input.required<string>()

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar
  })
  
  //on ne peut pas faire un avatar.set()
  onSelectUser(){}
}/*

/*export class UserComponent {
  //typescript veut savoir le type de la valeur
  //Et veut aussi l'initialiser car ne comprend pas que c'est "initialisé" avec angular
  //Avec la feature de ts "!" on dit que ça sera bien initialisé même si ts ne peux pas le voir dans ce code
  @Input({required: true}) avatar!: string 
  //required oblige à tout compléter dans l'html sinon onderstreep dans html dans la tag qui utilise user
  @Input({required: true}) name!: string

  get imagePath() {
    return 'assets/users/' + this.avatar
  }

  onSelectUser(){}
}*/

/*
// signal est une sorte de container qui contient des valeurs ET sin on fairt des changements de ces valeur, Angular sera au courants
//et sera capable d'identifier tous les endroits ou les valeurs sont utilisée (ex dans template) et update ces valeurs
// et dans le template, on doit appeler comme une fonction
// c'est un peu plus verbeux mais 
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  //efficient car il ne pas pas être vérifier à chaque changement dans le component ou l'application en général 
  //mais seulement quand reçoit le signal (assez à savoir pour le moment)
  //imagePath est de "type" UserComponent.imagePath: Signal<string>
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  onSelectUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser.set(DUMMY_USERS[randomIndex])
  }
}


export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex]

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar
  }

  //une partie du framework que est zone.js permet de automatically listens to all possible user events that could occur on a website
  //then check the Angular application for possible changes ==> c'est les chagments e dete tion dans Angular in a nutshell.
  //Après un listener comme button click, zone.js check tous les component de la zone pour voir s'il y a une update à faire
  //Avec signal, on check sans zone et de menière plus efficente
  onSelectUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser = DUMMY_USERS[randomIndex]
  }
}
*/

