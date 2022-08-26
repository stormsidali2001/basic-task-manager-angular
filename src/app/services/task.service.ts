import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../components/mock-tasks';
import { Task } from '../Task';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/tasks';

  constructor(private http:HttpClient) { }
  getTasks():Observable<Task[]>{
   return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url);
  }
  updateTaskReminder(task:Task){
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url,task,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
  addTask(task:Task){
    return this.http.post<Task>(this.apiUrl,task,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
}
