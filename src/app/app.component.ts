import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
updateLenght($event: Event) {
  console.log($event)
}
  title = 'password-generator';
  constructor(private clipboard: Clipboard){}

  options: { name: string, activated: boolean, rule: string }[] = [
    { name: 'Nombres', activated: true, rule: '0123456789' },
    { name: 'Lettres', activated: true, rule: 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm' },
    { name: 'Accents', activated: false, rule: 'êûîôâȩşçëüïöäèùìòàé' },
    { name: 'Charactètres spéciaux standarts', activated: true, rule: '!@[]{}/$%?&*()-=_+' },
    { name: 'Charactères spéciaux non standarts', activated: false, rule: '|±@£¢¤¬¦²³¼½¾~µ' }];
  length: number = 32;
  generated: boolean = false;
  
  generatePassword() {
    let possible_letters = '';
    for (let option of this.options) {
      if (option.activated) {
        possible_letters += option.rule;
      }
    }
    let password = ''
    for (let i = 0; i < this.length; i++){
      password += possible_letters.charAt(Math.floor(Math.random() * possible_letters.length));
    } 
    this.clipboard.copy(password);
    this.generated = true;
    setTimeout(() => {
      this.generated = false;
    }, 3000);
  }

  
}
