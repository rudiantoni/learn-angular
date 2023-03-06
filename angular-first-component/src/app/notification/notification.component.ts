import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  //templateUrl: './notification.component.html',
  // Using direct html template
  template: `<div class="alert alert-success" [ngClass]="{'fade-out': displayNotification === false}">
              <p>This website uses cookies to provide better user experience.</p>
              <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
            </div>`,
  //styleUrls: ['./notification.component.css']
  // Using css styles with selector array
  styles: [
    '.notification-div{margin: 10px 0px; padding: 10px 20px; background-color: #FAD7A0; text-align: center;}',
    'p{font-size: 14px;}',
    '.close{float: right; margin-top: -35px;}',
    '.fade-out{visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity 2s linear;}'
  ]
})
export class NotificationComponent {

  displayNotification: boolean = true;

  closeNotification () {
    this.displayNotification = false;
  }
}
