import { Component, ViewChild } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('myInput') myInput: IonInput;

  constructor(public keyboard: Keyboard) {
    setTimeout(() => {
      this.keyboard.hideFormAccessoryBar(false);
    }, 1000);
  }

  show() {
    this.myInput.setFocus();
  }

  showThenHide() {
    this.myInput.setFocus();

    setTimeout(() => {
      this.keyboard.hide();
    }, 2000);
  }

}
