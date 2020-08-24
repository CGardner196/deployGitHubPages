import { Injectable } from '@angular/core';
import { EtatVoiture } from '../enum/etat-voiture.enum'
import { CouleurVoiture } from '../enum/couleur-voiture.enum'
import { TypeVoiture } from '../enum/type-voiture.enum';

@Injectable({
  providedIn: 'root'
})
export class RefsService {

  eColorVoit = CouleurVoiture;
  eEtatVoit = EtatVoiture;
  eTypeVoit = TypeVoiture;
  constructor() { 
  }
}
