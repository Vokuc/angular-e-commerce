import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  initialValue: number = 0;
  
  navbar: string[] = [
    "Home", "Contact", "About", "Blog", "Event"
  ]
}
