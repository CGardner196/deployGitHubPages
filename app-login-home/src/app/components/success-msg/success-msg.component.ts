import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-success-msg',
  templateUrl: './success-msg.component.html',
  styleUrls: ['./success-msg.component.css']
})
export class SuccessMsgComponent implements OnInit {
  successIcon = faCheck;
  submit = false;

  successMessage = "Registration went well !";

  constructor() { 

    this.submit = false;
    
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.submit = true;
  }
  

}
