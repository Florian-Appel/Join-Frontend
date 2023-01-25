import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { TaskData } from './task-data';
import { Category } from './category';
import { Priority } from './priority';
import { User } from './user';
import { Status } from './status';
import { AddUser } from './add-user';

@Injectable({
  providedIn: 'root'

})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<TaskData[]>("https://join1.pythonanywhere.com/tasks/")
  }

  getCategories() {
    return this.http.get<Category[]>("https://join1.pythonanywhere.com/categories/")
  }

  getPriorities() {
    return this.http.get<Priority[]>("https://join1.pythonanywhere.com/priorities/")
  }

  getUsers() {
    return this.http.get<User[]>("https://join1.pythonanywhere.com/users/")
  }

  getStatus() {
    return this.http.get<Status[]>("https://join1.pythonanywhere.com/status/")
  }



  addTask(task: TaskData) {
    return this.http.post<TaskData>("https://join1.pythonanywhere.com/tasks/", task)
  }

  addUser(user: AddUser) {
    return this.http.post<AddUser>("https://join1.pythonanywhere.com/register/", user)
  }
}