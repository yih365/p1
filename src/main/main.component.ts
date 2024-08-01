import { Component } from '@angular/core';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { ExperienceComponent } from '../app/experience/experience.component';
import { ProjectsComponent } from '../app/projects/projects.component';
import { RouterOutlet } from '@angular/router';
import { HobbiesComponent } from '../app/hobbies/hobbies.component';
import { AboutmeComponent } from '../app/aboutme/aboutme.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ExperienceComponent, ProjectsComponent, HobbiesComponent, AboutmeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
