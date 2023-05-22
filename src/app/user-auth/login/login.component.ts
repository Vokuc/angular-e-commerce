import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login(name: string) {
      alert(`You are now logged in as ${name}`)
  }
  

  male = false;
  firstTimer = "yes";
  name = ""
  names = ['Chika', 'Rosy', 'Ify']
  details = [
    {
      aha: 'Chika', 
      age: 25,
      hobbies: ['Reading', 'Football',]
    },
    {
      aha: 'Rosy', 
      age: 24,
      hobbies: ['Singing', 'Working',]
    },
    {
      aha: 'Ify', 
      age: 22,
      hobbies: ['Reading', 'Dancing',]
    }
  ]

  color = "green"
  colors = ["red", "green", "blue", "yellow"]
  selectedColor= this.colors[0]
  updateColor() {
    let random = Math.floor(Math.random() * this.colors.length)
    this.selectedColor = this.colors[random]
  }
}
