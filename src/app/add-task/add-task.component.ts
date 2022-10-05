import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { Priority } from '../priority';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  categories:Category[]=[]
  priorities:Priority[]=[]

  selected_prio = 0

  constructor(private service:TaskService) { 
    this.service.getCategories().subscribe(data => this.categories = data)
    this.service.getPriorities().subscribe(data => this.priorities = data)
  }

  ngOnInit(): void {
  }

  select_prio(event:any,id:number) {
    this.selected_prio = id
    console.log(event.target);
    
    console.log(this.selected_prio);
    
  }


}
