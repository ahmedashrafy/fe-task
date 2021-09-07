import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fe-task';

  showInput: boolean = true;
  showTotal: boolean = false; 

  formSubmitted(): void
  {
    this.showInput = false; 
  }

  toggleTotal(): void
  {
    this.showTotal = !this.showTotal; 
  }
}
