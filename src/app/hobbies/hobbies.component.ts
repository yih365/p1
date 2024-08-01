import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

interface Image {
  src: string,
  staticSrc: string,
  alt: string,
  imgUrl: string,
}

@Component({
  selector: 'hobbies',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
  gifs:Image[] = [
    {
      src: "lady.GIF",
      staticSrc: "lady_static.PNG",
      alt: "lady side eye GIF",
      imgUrl: "lady_static.PNG",
    },
    {
      src: "smoking.GIF",
      staticSrc: "smoking_static.PNG",
      alt: "smoking GIF",
      imgUrl: "smoking_static.PNG",
    },
  ];
}
