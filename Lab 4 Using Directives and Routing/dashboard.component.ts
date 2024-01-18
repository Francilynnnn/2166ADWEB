import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  products = [
    { imageUrl: 'https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg.webp', name: 'Cafe Latte', price: 'P145.00' },
    { imageUrl: 'https://miro.medium.com/v2/resize:fit:14720/1*ZajEMv2yEHjwYlNOHmtNfg.jpeg', name: 'Spanish Latte', price: 'P165.00' },
    { imageUrl: 'https://img.delicious.com.au/OVuZkaXj/w759-h506-cfill/del/2021/06/how-much-coffee-should-you-drink-per-dayy-heres-what-the-science-says-154176-3.jpg', name: 'Caramel Macchiato', price: 'P155.00' },
  ];

}
