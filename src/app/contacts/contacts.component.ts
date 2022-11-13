import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { User } from '../user';
import { TaskService } from '../task.service';
import { TaskData } from '../task-data';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  tasks: TaskData[] = []
  users: User[] = []


  constructor(public dialog: MatDialog, private service: TaskService) {
    this.service.getTasks().subscribe(data => {
      this.tasks = data
    })
    this.service.getUsers().subscribe(data => {
      this.users = data
    })
  }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(AddContactComponent, { panelClass: 'my-panel-class' });
  }

  getUsername(id: number) {
    const element = this.users.find(user => user.id == id)
    return element?.username
  }

}
