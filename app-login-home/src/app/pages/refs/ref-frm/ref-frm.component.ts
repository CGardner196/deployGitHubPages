import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { faTrash, faPencilAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ref-frm',
  templateUrl: './ref-frm.component.html',
  styleUrls: ['./ref-frm.component.css']
})
export class RefFrmComponent implements OnInit {
  deleteIcon = faTrash;
  editIcon = faPencilAlt;
  plusIcon = faPlusCircle;

  form: FormGroup;
  title: string = "";
  editIndex: number = -1;
  editIndexBool: boolean = false;

  constructor() {}

   ngOnInit() {
    this.form = new FormGroup({
        code: new FormControl(''),
        lib: new FormControl('')
    });
    // console.log(history.state);
    // console.log(history.state.lib);
    this.title = history.state.lib;
}

  rows = [];

  onSubmit(row) {
    if(this.editIndex === -1) {
      this.rows.push(row);
      // this.form.value = null;
      
      console.log("submit call ...")
    }
    else {
        this.rows[this.editIndex] = row;
        console.log("on edit conf call ...");
        this.editIndex = -1;
        this.editIndexBool = false;
    }
    this.form.controls["code"].setValue("");
    this.form.controls["lib"].setValue("");
  }

  onDelete(row) {
    console.log(row);
    console.log("delete button clicked!");
    const index = this.rows.indexOf(row);
    if (index > -1 ) {
      this.rows.splice(index, 1);
    }
  }

  onEdit(row) {
    // console.log(row);
    console.log("editing ...");

    // put fields values in 
    this.form.controls["code"].setValue(row.code);
    this.form.controls["lib"].setValue(row.lib);
    this.editIndex = this.rows.indexOf(row)
    this.editIndexBool = true;
  }

  
}
