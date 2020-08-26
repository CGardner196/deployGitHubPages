import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterVoit'
})
export class FilterVoitPipe implements PipeTransform {

  transform(pipeData, pipeModifier): any {
    
      return pipeData.filter(eachItem => {
      return (
        (eachItem['mark']?
        eachItem['mark'].toLowerCase().includes(pipeModifier.toLowerCase()) : false ) ||
        
        (eachItem['annee']?
        eachItem['annee'].toLowerCase().includes(pipeModifier.toLowerCase()) : false ) ||

        (eachItem['model']?
        eachItem['model'].toLowerCase().includes(pipeModifier.toLowerCase()) : false ) ||

        (eachItem['chassis']?
        eachItem['chassis'].toLowerCase().includes(pipeModifier.toLowerCase()) : false ) ||

        (eachItem['prix']?
        eachItem['prix'].toLowerCase().includes(pipeModifier.toLowerCase()) : false ) ||

        (eachItem['matricule']?
        eachItem['matricule'].toLowerCase().includes(pipeModifier.toLowerCase()) : false )||

        (eachItem['color']?
        eachItem['color'].toLowerCase().includes(pipeModifier.toLowerCase()) : false )||

        (eachItem['type']?
        eachItem['type'].toLowerCase().includes(pipeModifier.toLowerCase()) : false) ||

        (eachItem['etat']?
        eachItem['etat'].toLowerCase().includes(pipeModifier.toLowerCase()) : false)
      )
    });
    
  }
    

}
