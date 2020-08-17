import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ref-frm',
  templateUrl: './ref-frm.component.html',
  styleUrls: ['./ref-frm.component.css']
})
export class RefFrmComponent implements OnInit {
  deleteIcon = faTrash;
  editIcon = faPencilAlt;

  form: FormGroup;
  title: string = "";

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
    this.rows.push(row);
    // this.form.value = null;
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
    console.log(row);
    console.log("editing ...");
  }

}
