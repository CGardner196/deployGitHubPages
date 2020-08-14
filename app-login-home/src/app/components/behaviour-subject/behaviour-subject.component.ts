import { Component, OnInit } from '@angular/core';
import { SessionStorage } from 'angular-web-storage';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.css']
})
export class BehaviourSubjectComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

  // @SessionStorage() sessionValue: string = "Hello from Naydazo";
  // @SessionStorage() sessionStatus: string = "Done";
  // @SessionStorage() sessionDate: Date = new Date;
  
  
  subject = new BehaviorSubject<string>('sending initial data');
  
  testingFnc() {
    this.subject.subscribe((data) => {
      // console.log("incoming from one component : " + data);
    })
    this.subject.subscribe((data) => {
      // console.log("incoming from another component : " + data);
    })

    this.subject.next("Sending 1");
    this.subject.next("Sending 2");
    
  }
  
  
  
}
