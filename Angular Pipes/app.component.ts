import { Component } from '@angular/core';
import { Observable, map, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'midterm';
  currentDate = new Date();
  a: number = 90678;
  b: number = 45.87;
  decimal = 122946;
  num = 82736;
  collection: string[] = ['Science', 'History', 'Math', 'English']; 
  myNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  data: object = {
    school: "Holy Angel University",
    departments: [
      {name: "School of Computing", acro: "SoC"},
      {name: "School of Education", acro: "SED"},
      {name: "School of Arts and Sciences", acro: "SAS"},
    ]
    
  }
}
