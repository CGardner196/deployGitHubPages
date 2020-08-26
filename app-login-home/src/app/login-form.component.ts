import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    form: FormGroup;
    errorIcon = faExclamationCircle;
    error = false;
    constructor(private router: Router, private auth: AuthService) {
        this.auth.logOut();
    }

    ngOnInit() {
        this.form = new FormGroup({
            login: new FormControl(''),
            pwd: new FormControl('')
        });
        // sessionStorage.removeItem("currentUser");
    }

    onSubmit(user) {
        if(this.auth.logIn(user)){
            this.router.navigate(['/home/homecontent']);
        }
        else {
            // this.router.navigate(['/login']);
            this.error=true;
        }
    }
}

    // if(!this.users.find(item => item.pwd === user.pwd)) {
    //   console.log(this.users)
    //   // console.log(this.users.indexOf(user));
    //   console.log(user)
    //   console.log("user not found");

    //   this.router.navigate(['/login']);
    // } 
    // else {
    //   this.router.navigate(['/home']);
    // }