import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_e-commerce';

  userData: any = {}

  getData(data: NgForm) {
    console.warn(data)
    this.userData = data
  }

  name: string = "Ukpai Chika Kalu";
  names: string[] = ['John Doe', 'Hames', 'Rodriguez', 'Haaland Erling', 'Kevin De Chibuzor'];

  sendName() {
    this.name =  this.names[Math.ceil(Math.random() * this.names.length - 1)]
  }

  userDetails = [
    { name: 'Chika', email: 'chika@testmail.com' },
    { name: 'Rosaline', email: 'rose@testmail.com' },
    { name: 'Ifiline', email: 'Ify@testmail.com' },
    { name: 'Mirline', email: 'chika@testmail.com' },
    { name: 'Chimini', email: 'chima@testmail.com' },
  ]
}
