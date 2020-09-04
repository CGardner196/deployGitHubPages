import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faTrash, faPencilAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { StoreService } from 'src/app/services/store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ref-frm',
  templateUrl: './ref-frm.component.html',
  styleUrls: ['./ref-frm.component.css']
})
export class RefFrmComponent implements OnInit {
  deleteIcon = faTrash;
  editIcon = faPencilAlt;
  plusIcon = faPlusCircle;

  form;
  lib: string = "";
  code: string = "";
  editIndex: number = -1;
  rows = [];
  refElems;
  constructor(private store: StoreService, private route: ActivatedRoute, private fb: FormBuilder) {

  }

  ngOnInit() {
    
    this.code = this.route.snapshot.params.code;
    if(this.code === "type") {
      this.rows = this.store.getVoitTypes();
    }
    this.lib = this.route.snapshot.params.lib;
    this.refElems = this.store.getRefElms();
    this.rows = this.refElems[this.code]

    this.form = this.fb.group({
      code: [''],
      lib: ['']
    })
  }

  onSubmit(row) {
    if (this.editIndex === -1) {
      this.rows.push(row);
      // this.store.setRefElms(this.refElems);
      if(this.code === "type") {
        this.store.addVoitType(row);
      }
    }
    else {
      this.rows[this.editIndex] = row;
      // this.store.setRefElms(this.refElems);
      this.editIndex = -1;
    }

    this.refElems[this.code] = this.rows;
    this.store.setRefElms(this.refElems)

    this.form.controls["code"].setValue("");
    this.form.controls["lib"].setValue("");

  }

  onDelete(row) {
    console.log(row);
    console.log("delete button clicked!");
    const index = this.rows.indexOf(row);
    if (index > -1) {
      this.rows.splice(index, 1);
    }
    this.refElems[this.code] = this.rows;
    this.store.setRefElms(this.refElems)
  }

  onEdit(row) {
    // put fields values in form components
    this.form.controls["code"].setValue(row.code);
    this.form.controls["lib"].setValue(row.lib);
    this.editIndex = this.rows.indexOf(row);
  }
  
}
