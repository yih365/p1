import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrollDown():boolean {
    if (typeof window !== "undefined") {
      return window.scrollY > 0;
    }
    return false;
  }
}
