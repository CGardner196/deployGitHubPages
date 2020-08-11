import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    form: FormGroup;

    constructor(private router: Router) {}

    ngOnInit() {
        this.form = new FormGroup({
            login: new FormControl(''),
            password: new FormControl('')
        });
    }

    onSubmit(userCredentials) {
        console.log(userCredentials);
        this.router.navigate(['/home']);
    }
}