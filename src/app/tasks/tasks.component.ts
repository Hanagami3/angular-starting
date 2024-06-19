import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import {  NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';



@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input({required: true}) userId!: string;


  // ? == ça peut ne as être "setté", je suis au courant
  //MNT c'est à nous d'être certain d'utiliser cela alors qu'il est "setté"
  @Input() name?: string
  //autre manière aussi util pour permettre de mettre plusieur possible type
  //@Input() name: string | undefined

  IsAddingTask: boolean = false
  
  /*
  // on peut faire comme ça mais problème car différente intentiation de tasksservice dans différent component
  private tasksService = new TasksService();
  */
  
  // DEPENDENCY INJECTION ==> you tell Angular wich type of value you need 
  // and Angular creates it and provides it as an argument
  // Pivate est ici un raccourcie qui va créer automatiquemement une propriété avec le même nom
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId)
  }

   onCompleteTask(id: string){
  //   this.tasksService = this.tasksService.filter(task => task.id !== id)
   }

  onStartAddTask(){
      this.IsAddingTask = true
  }

  onCloseAddTask(){
    this.IsAddingTask = false
  }

  //Kan remove because we're no longer triggering it 
  //  onAddTask(taskData: NewTaskData){
  //    this.IsAddingTask = false
  //  }
}
