import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from '../category';
import { DialogAddTaskComponent } from '../dialog-add-task/dialog-add-task.component';
import { Status } from '../status';
import { TaskData } from '../task-data';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  tasks:TaskData[] = []
  categories:Category[] = []
  status_list:Status[]=[]

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
   }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogAddTaskComponent);
  }

}
