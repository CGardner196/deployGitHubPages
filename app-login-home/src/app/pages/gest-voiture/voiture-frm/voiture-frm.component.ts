import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-voiture-frm',
  templateUrl: './voiture-frm.component.html',
  styleUrls: ['./voiture-frm.component.css']
})
export class VoitureFrmComponent implements OnInit {
  form;
  editIndex = -1;
  
  constructor(private store: StoreService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      mark: [''],
      annee: [''],
      model: [''],
      chassis: [''],
      prix: [''],
      matricule: [''],
      color: [''],
      type: [''],
      etat: ['']
    })
    // console.log(this.route.snapshot.params);
    if(this.route.snapshot.params){
      this.initFormValues(this.route.snapshot.params);
    }
  }

  initFormValues(row) {
    this.form.controls["mark"].setValue(row.mark);
    this.form.controls["annee"].setValue(row.annee);
    this.form.controls["model"].setValue(row.model);
    this.form.controls["chassis"].setValue(row.chassis);
    this.form.controls["prix"].setValue(row.prix);
    this.form.controls["matricule"].setValue(row.matricule);
    this.form.controls["color"].setValue(row.color);
    this.form.controls["type"].setValue(row.type);
    this.form.controls["etat"].setValue(row.etat);
    this.editIndex = row.id;
  }
  
  onSubmit(voiture) {
    if(this.editIndex === -1) {
      // add voiture
      this.store.addVoiture(voiture);
    }
    else 
    {
      // editing an existing value
      this.store.editVoiture(voiture);
      
    }
     this.store.voitures.subscribe();
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onCancel() {
    console.log("................ cancelling modifications ....................");
  }

}
