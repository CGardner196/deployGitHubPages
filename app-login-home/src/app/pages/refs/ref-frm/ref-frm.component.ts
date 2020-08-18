import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { faTrash, faPencilAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { StoreService } from 'src/app/services/store.service';

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
  code: string = "";
  editIndex: number = -1;
  editIndexBool: boolean = false;
  // refs;
  rows : [] = [];

  constructor(private store: StoreService) {
  }

  @HostListener("window:beforeunload", ["$event"])
  pageTitleRefFrm(event: Event) {
    if(this.title !="") {
      sessionStorage.setItem("titleRefFrm", this.title);
      sessionStorage.setItem("codeRefFrm", this.code);
      sessionStorage.setItem("refsData", JSON.stringify(this.store.refsData));
    }
  }

  ngOnInit() {
    if(sessionStorage.getItem("titleRefFrm")){
      this.title = sessionStorage.getItem("titleRefFrm");
      sessionStorage.removeItem("titleRefFrm")
      this.code = sessionStorage.getItem("codeRefFrm");
      sessionStorage.removeItem("codeRefFrm");
      this.rows = this.store.getRefsDataByKey(this.code);
    } else {
      this.code = history.state.code;
      // console.log(this.code);
      this.title = history.state.lib;
      // console.log(this.title);
      this.rows = this.store.getRefsDataByKey(this.code);
    }
    this.form = new FormGroup({
        code: new FormControl(''),
        lib: new FormControl('')
    });
    // console.log(history.state);
    // console.log(history.state.lib);
    
    
    // this.refs = this.store.getRefs();
    
}

 

  onSubmit(row) {
    if(this.editIndex === -1) {
      this.rows.push(row);
      // this.form.value = null;
      console.log("submit call ...");
      
    }
    else {
        this.rows[this.editIndex] = row;
        console.log("on edit conf call ...");
        this.editIndex = -1;
        this.editIndexBool = false;
    }
    this.store.refsData.setValue(this.code, this.rows);
    console.log(this.store.refsData)
    this.form.controls["code"].setValue("");
    this.form.controls["lib"].setValue("");
    console.log("Ref Data : ", this.store.getRefsData());
  }

  onDelete(row) {
    console.log(row);
    console.log("delete button clicked!");
    const index = this.rows.indexOf(row);
    if (index > -1 ) {
      this.rows.splice(index, 1);
      this.store.refsData.setValue(this.code, this.rows);
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
