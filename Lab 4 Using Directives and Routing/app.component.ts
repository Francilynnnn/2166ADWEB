import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router_demo';

  name = 'Francilyn Estanislao';

  //String Interpolation
  position = 'Shoplifter';
  work_experience='';
  email='estanislaofrancilyn@gmail.com';
  website='francitrip@wordpress.com';
  phone='0960-560-4785';

  //Image Interpolation/binding
  imageUrl:string="assets/franci.png";
  imageW: number = 110;
  imageH: number = 100;


}
