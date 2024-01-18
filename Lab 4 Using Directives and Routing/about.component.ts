import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = 'router_demo';

  name = 'Francilyn Estanislao';

  //String Interpolation
  position = 'Front-End Developer';
  work_experience='10 Years';
  email='estanislaofrancilyn@gmail.com';
  website='www.franciTrip.com';
  phone='0999-999-9999';

  //Image Interpolation/binding
  imageUrl:string="../../assets/franci.jpg";
  ImageW: number = 50;
  ImageH: number = 50;


}
