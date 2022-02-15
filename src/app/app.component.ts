import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Super Group';

  toggle(event: any){
    console.log(event)
    // run your action here 
    // e.g call a service to edit or delete or add to a list
    // console.log(newItem);
  }
}
