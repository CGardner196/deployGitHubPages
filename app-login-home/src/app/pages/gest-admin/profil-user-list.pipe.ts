import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profilUserList'
})
export class ProfilUserListPipe implements PipeTransform {

  transform(profiles) {
    const profilesNames = [];
    for(const profile of profiles) {
      profilesNames.push(profile.name);
    }
    return profilesNames.join(', ');
  }
}
