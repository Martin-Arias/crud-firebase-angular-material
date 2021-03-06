import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material';
  notifications = 99;

  showSpinner = false;


  loadData() {
    this.showSpinner=true;
    setTimeout(() => {
      this.showSpinner=false
    }, 5000);
  }

}
