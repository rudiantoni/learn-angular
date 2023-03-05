import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  //templateUrl: './notification.component.html',
  // Using direct html template
  template: `<div class="alert alert-success">
              <p>This website uses cookies to provide better user experience.</p>
            </div>`,
  //styleUrls: ['./notification.component.css']
  // Using css styles with selector array
  styles: ['.notification-div{margin: 10px 0px; padding: 10px 20px; background-color: #FAD7A0; text-align: center;}', 'p{font-size: 14px;}']
})
export class NotificationComponent {

}
