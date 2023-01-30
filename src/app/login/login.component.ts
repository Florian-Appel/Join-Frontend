import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Test for Login (dosen't work)

  async sendLogin() {
    let fd = new FormData();
    let token = '{{ csrf_token }}';
    //fd.append('textmessage', email.value);
    fd.append('csrfmiddlewaretoken', token);

    try {
      let response = await fetch('/chat/', { // ?
        method: 'POST',
        body: fd
      });
  
      let json = await response.json();
  
      console.log(json);

    } catch (e) {
      console.error('ERROR!', e)
  }

    
  }

}
