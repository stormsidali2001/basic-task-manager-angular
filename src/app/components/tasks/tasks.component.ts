import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[] = [];
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks:Task[])=>{
      this.tasks = tasks;
    })
  }
  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>{
      this.tasks = this.tasks.filter(tsk=>tsk.id !== task.id)
    })
  }
  toggleReminder(task:Task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
  }
  submitTask(task:Task){
    this.taskService.addTask(task).subscribe((task:Task)=>{
      this.tasks.push(task)
    })
  }

}
