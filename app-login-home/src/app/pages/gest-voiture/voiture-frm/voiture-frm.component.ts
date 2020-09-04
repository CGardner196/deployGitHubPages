import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { RefsService } from 'src/app/services/refs.service';

@Component({
  selector: 'app-voiture-frm',
  templateUrl: './voiture-frm.component.html',
  styleUrls: ['./voiture-frm.component.css']
})
export class VoitureFrmComponent implements OnInit {
  form;
  eColorVoit;
  editForm: boolean = false;
  eEtatVoit;
  eTypeVoit;
  keys = Object.keys;
  selectedType;
  voitTypes = [];

  constructor(private refsService: RefsService, private store: StoreService, private route: ActivatedRoute, 
    private fb: FormBuilder, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.voitTypes = this.store.getVoitTypes();
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
    if(this.route.snapshot.params["matricule"]){
      this.initFormValues(this.route.snapshot.params);
      this.editForm = true;
    }
    this.eColorVoit = this.refsService.eColorVoit;
    this.eEtatVoit = this.refsService.eEtatVoit;
    this.eTypeVoit = this.refsService.eTypeVoit;
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
  }
  
  onSubmit(voiture) {
    // console.log("params route : matricule : ", this.route.snapshot.params['matricule']);
    voiture['prixSold'] = voiture.prix;
    if(!this.route.snapshot.params['matricule']) {
      // add voiture
      this.store.addVoiture(voiture);
      this.store.voitures.subscribe(
        res => {},
        err => {
          console.log("error on adding a voiture");
        }
      );
    }
    else 
    {
      // editing an existing value

      this.store.editVoiture(voiture, this.route.snapshot.params['matricule']);
      this.store.voitures.subscribe(
        res => {},
        err => {
          console.log("error on editing a voiture : ", voiture);
        }
      );
      
    }
    this.router.navigate(['../'], {relativeTo: this.route});
    
  }

  onCancel() {
    console.log("................ cancelling modifications ....................");
  }

}
