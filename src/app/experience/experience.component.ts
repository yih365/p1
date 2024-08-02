import { Component } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

enum ExperienceTag {
  ALL = "All",
  SOFTWARE = "Software Engineering",
  RESEARCH = "Research",
  TEACHING = "Teaching",
}

interface Date {
  month: number;
  year: number;
}

interface Link {
  name: string;
  link: string;
}

interface ExperienceRow {
  company: string;
  position: string;
  startDate: Date;
  endDate: Date;
  description: string;
  links: Link[];
  tag: ExperienceTag;
}

@Component({
  selector: 'experience',
  standalone: true,
  imports: [MatChipsModule, MatIconModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  // filters
  defaultFilter = ExperienceTag.SOFTWARE;
  readonly filters: string[] = Object.values(ExperienceTag);

  // experience rows
  readonly softwareExperienceRows: ExperienceRow[] = [
    {
      company: "Google",
      position: "Software Engineer Intern",
      startDate: {
        month: 6,
        year: 2024
      },
      endDate: {
        month: 9,
        year: 2024
      },
      description: [
        "Improve the overall reliability of contacts sync for 5.5 million WearOS devices.",
        "Increase the daily up-to-date rate of contacts by designing a new form of sync, running daily to efficiently identify then update mismatched contacts.",
      ].join(" "),
      links: [],
      tag: ExperienceTag.SOFTWARE
    },
    {
      company: "Google",
      position: "Software Engineer Intern",
      startDate: {
        month: 6,
        year: 2023
      },
      endDate: {
        month: 9,
        year: 2023
      },
      description: [
        "Implemented and launched a community gallery web page for Visual Blocks for ML, using GitHub Actions for compiling dynamic data and Angular for web page implementation.",
        "Set up testing infrastructure for a graph editor tool with 70+ new tests added, reaching almost 100% coverage. ",
      ].join(" "),
      links: [
        {
          name: "Visual Blocks Community",
          link: "https://visualblocks.withgoogle.com/#/community",
        },
      ],
      tag: ExperienceTag.SOFTWARE
    },
    {
      company: "Google",
      position: "STEP Intern",
      startDate: {
        month: 6,
        year: 2022
      },
      endDate: {
        month: 9,
        year: 2022
      },
      description: [
        "Collaborated with a team of software engineers and one other intern in Google’s Core Web Dev team to create a reflection API for web protocol buffers and achieve interoperability between different forms of protobuf data."
      ].join(" "),
      links: [],
      tag: ExperienceTag.SOFTWARE
    },
  ];
  readonly researchExperienceRows: ExperienceRow[] = [
    {
      company: "UCSD Design Lab",
      position: "Research Intern",
      startDate: {
        month: 11,
        year: 2023
      },
      endDate: {
        month: 5,
        year: 2024
      },
      description: [
        "Conducted research with a PhD student in the realm of Human-AI Interaction in Video creation.",
        "Prototyped multiple versions of a web app to align with design goals.",
        "Co-facilitated 10 user studies, analyzed and discussed implications."
      ].join(" "),
      links: [],
      tag: ExperienceTag.RESEARCH
    },
    {
      company: "Google",
      position: "Software Engineer Intern (Research project)",
      startDate: {
        month: 6,
        year: 2023
      },
      endDate: {
        month: 9,
        year: 2023
      },
      description: [
        "Collaborated with a group of research scientists in a Human Computer Interaction project.",
        "Implemented web features to prepare for user studies.",
        "Shadowed 16 user studies, analyzed quantitative and qualitative data, produced graphs and charts for final paper."
      ].join(" "),
      links: [
        {
          name: "Paper",
          link: "https://arxiv.org/abs/2312.09672"
        },
      ],
      tag: ExperienceTag.RESEARCH
    }
  ];
  readonly teachingExperienceRows: ExperienceRow[] = [
    {
      company: "UCSD, Jacobs School of Engineering",
      position: "CSE tutor",
      startDate: {
        month: 9,
        year: 2023
      },
      endDate: {
        month: 3,
        year: 2024
      },
      description: [
        "Tutored students in an 'Design/Analysis of Algorthms' course and 'Theory of Computability' course.",
        "Held weekly office hours to explain concepts to students at varying degrees of proficiency.",
        "Graded homework assigments and provided feedback for incorrect solutions."
      ].join(" "),
      links: [],
      tag: ExperienceTag.TEACHING
    },
    {
      company: "CodePath",
      position: "Teaching Assitant",
      startDate: {
        month: 2,
        year: 2023
      },
      endDate: {
        month: 11,
        year: 2023
      },
      description: [
        "Facilitated lab for 3 groups of 4-6 students per group, remotely for the Introductory Android Development Course.",
        "Taught students about Kotlin and course-chosen content for Android Studio (API calls, RecyclerViews, Adapters)."
      ].join(" "),
      links: [],
      tag: ExperienceTag.TEACHING
    }
  ];
  readonly allExperienceRows: ExperienceRow[] = this.softwareExperienceRows.concat(this.researchExperienceRows).concat(this.teachingExperienceRows);
  experienceRows: ExperienceRow[] = this.getFiltersFromSelection(this.defaultFilter);

  constructor() {
    this.sortAllExperiences();
  }

  // Function to format date data to string
  getFullDateString(startDate: Date, endDate: Date) {
    return `${this.getMonthString(startDate.month)} ${startDate.year} - ${this.getMonthString(endDate.month)} ${endDate.year}`;
  }

  getMonthString(month:number): string {
    const monthsMapping:{[key:number]:string} =
      {1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sept", 10: "Oct", 11: "Nov", 12: "Dec"};
    return monthsMapping[month];
  }

  // Function to handle change in filter selection
  changeSelected(selection: string) {
    this.experienceRows = this.getFiltersFromSelection(selection);
  }

  getFiltersFromSelection(selection: string):ExperienceRow[] {
    switch (selection) {
      case ExperienceTag.SOFTWARE:
        return this.softwareExperienceRows;
      case ExperienceTag.RESEARCH:
        return this.researchExperienceRows;
      case ExperienceTag.TEACHING:
        return this.teachingExperienceRows;
      default:
        // display all
        return this.allExperienceRows;
    }
  }

  openLink(link: string) {
    window.open(link, "_blank");
  }

  sortAllExperiences() {
    this.allExperienceRows.sort(this.compareExperience);
  }

  compareExperience(a:ExperienceRow, b:ExperienceRow):number {
    let dateA = a.endDate;
    let dateB = b.endDate;
    if (dateA.year < dateB.year) {
      return 1;
    } else if (dateA.year == dateB.year) {
      if (dateA.month < dateB.month) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  }
}
