import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

interface Project {
  title: string;
  description: string;
  skills: string[];
  link: string;
}

@Component({
  selector: 'projects',
  standalone: true,
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: "Chess Tracker",
      description: "Android app that tracks and visualizes a user's Chess.com stats and game history",
      skills: ["Kotlin", "Android Studio"],
      link: "https://github.com/Code-Path-Project/ChessTracker",
    },
    {
      title: "Paper Trading",
      description: "Web app that simulates stock trading, allowing users to create an account, track prices, buy and sell stocks",
      skills: ["JavaScript", "React", "Node.js", "MySQL"],
      link: "https://github.com/yih365/paper-trading",
    },
    {
      title: "Apartment Prices Web Scraper",
      description: "Program that accesses various websites for apartment listings, scrapes the html, and organizes them into a csv file by listing price.",
      skills: ["Python", "Selenium", "BS4"],
      link: "https://github.com/yih365/Apt-Prices-Web-Scraper",
    },
    {
      title: "Drawing RefGen",
      description: "Android app that uses the OpenAI API to generate drawing references for the user’s drawings by providing image variations of the user’s drawing",
      skills: ["Kotlin", "Android Studio", "OpenAI API"],
      link: "https://github.com/yih365/draw-refgen",
    }
  ];

  onCardSelected = (link:string) => {
    window.open(link, "_blank");
  }
}
