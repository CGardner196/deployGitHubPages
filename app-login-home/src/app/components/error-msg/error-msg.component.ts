import { Component, OnInit } from '@angular/core';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  errorIcon = faExclamationCircle;
  submit = false;

  errorMsg = "Something went wrong !";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submit = true;
  }

}
