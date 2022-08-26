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
}
