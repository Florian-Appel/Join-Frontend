import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private service:TaskService) {

  }

  ngOnInit(): void {
  }

  submitData(f:NgForm){
    this.service.addUser(f.value).subscribe(data => console.log(data));
  }

}
