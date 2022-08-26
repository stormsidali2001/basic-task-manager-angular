import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;
  reminder:boolean = false;

  @Output() onSubmitTask:EventEmitter<Task> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.text){
      alert("please add a task");
      return ;
    }
    const newTask:Task = {
      text:this.text,
      day:this.day,
      reminder:this.reminder
    };
    this.onSubmitTask.emit(newTask);
    this.text = '';
    this.day = '';
    this.reminder = false;

  }

}
