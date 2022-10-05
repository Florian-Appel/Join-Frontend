import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { Category } from '../category';
import { DialogAddTaskComponent } from '../dialog-add-task/dialog-add-task.component';
import { Priority } from '../priority';
import { Status } from '../status';
import { TaskData } from '../task-data';
import { TaskService } from '../task.service';
import { User } from '../user';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  tasks:TaskData[] = []
  categories:Category[] = []
  status_list:Status[]=[]
  priorities:Priority[]=[]
  users:User[]=[]

  constructor(public dialog: MatDialog, private service:TaskService) {
    this.service.getTasks().subscribe(data => {
      this.tasks = data
    })

    this.service.getCategories().subscribe(data => {
      this.categories = data
    })

    this.service.getStatus().subscribe(data => {
      this.status_list = data
    })

    this.service.getPriorities().subscribe(data => {
      this.priorities = data
    })

    this.service.getUsers().subscribe(data => {
      this.users = data
    })
   }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogAddTaskComponent);
  }

  getCategoryName(id:number) {
    const element = this.categories.find(category => category.id == id)
    return element?.name
  }

  getPriorityName(id:number) {
    const element = this.priorities.find(priority => priority.id == id)
    return element?.name
  }

  getUsername(id:number) {
    const element = this.users.find(user => user.id == id)
    return element?.username
  }

}
