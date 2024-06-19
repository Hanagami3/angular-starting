import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";


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

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]
 
  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter(task => task.id !== id)
  }

  onStartAddTask(){
      this.IsAddingTask = true
  }

  onCancelAddTask(){
    this.IsAddingTask = false
  }
}
