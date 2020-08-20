import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterVoit'
})
export class FilterVoitPipe implements PipeTransform {

  transform(pipeData, pipeModifier): any {
    
      return pipeData.filter(eachItem => {
      return (
        eachItem['mark'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['annee'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['model'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['chassis'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['prix'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['matricule'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['color'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['type'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['etat'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });
    
  }
    

}
