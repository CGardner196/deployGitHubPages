import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'soldVoiture'
})
export class SoldVoiturePipe implements PipeTransform {

  transform(voitures)  {
    voitures.forEach(element => {
      if(element.annee < 2013) {
        element.prixSold = element.prix * 0.75;
      }
    });
    return voitures;
  }

}
