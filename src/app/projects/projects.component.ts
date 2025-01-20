import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../card/card';
import { CardContainerComponent } from "../card-container/card-container.component";
import { RouterLink } from '@angular/router';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, CardContainerComponent, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Card[] = [
    {
      title: "Portfolio",
      images: ["/images/projects/portfolio/home.png", "/images/projects/portfolio/contact.png"],
      description: `
        Let's start with the obvious. This website is a portfolio built with some of the skills I'm trying to show off.
        It is an Angular app designed from scratch by myself (and some helpful friends, who shared feedback).
        Eventually, I would like to use a database to store the projects for this page, when I have time to add that.
      `,
      links: [
        {
          url: "/",
          icon: faLink
        },
        {
          url: "https://github.com/mustafakalash/mkalash.com",
          icon: faGithub
        }
      ],
      keywords: ["Angular", "Typescript", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Advent of Code 2024",
      images: [],
      description: `
        Advent of Code is an annual coding challenge that takes place in December, with a new puzzle to solve each day.
        The challenge is language agnostic and tackles common difficult programming problems with a fun narrative.
        Success also requires strict optimization, as many puzzle inputs are large and would take an impractical amount
        of time to run with slow code. I used Python for the entirety of the challenge, with minimal external libraries.
        I'm proud to say that I was able to dedicate to finishing every puzzle in 2024.
      `,
      links: [
        {
          url: "https://github.com/mustafakalash/AoC-2024",
          icon: faGithub
        }
      ],
      keywords: [
        "Python", "A*", "DFS", "Graph theory", "Optimization", "Simulation", "Math", "Flood fill", "Memoization", "Diophantine equations",
        "Bron-Kerbosch", "NetworkX", "Nuts and bolts", "Knapsack problem", "Compaction", "Recursion", "Dynamic programming"
      ]
    },
    {
      title: "Reddit on Youtube",
      images: ["/images/projects/royt/preview.png"],
      description: `
        A Firefox port of a Chrome extension which embeds Reddit commends under Youtube videos, with the ability to swap between them
        and Youtube's default comments.
      `,
      links: [
        {
          url: "https://github.com/mustafakalash/royt",
          icon: faGithub
        }
      ],
      keywords: ["HTML", "CSS", "JavaScript", "Handlebars", "Mustache", "XPI", "Firefox addon"]
    },
    {
      title: "Vanilla Hotbar Extender",
      images: ["images/projects/vhe/example.gif"],
      description: `
        A mod for the online game Final Fantasy XIV which adds extra functionality to the game's UI.
        Written in C# .NET with ImGui using a community-made API created by reverse engineering the game's code.
      `,
      links: [
        {
          url: "https://github.com/mustafakalash/VanillaHotbarExtender",
          icon: faGithub
        }
      ],
      keywords: ["C#", ".NET", "ImGui", "Game development", "Modding", "Reverse engineering"]
    },
    {
      title: "Sudoku",
      images: ["images/projects/sudoku/generate.gif", "images/projects/sudoku/play.gif", "images/projects/sudoku/solve.gif"],
      description: `
        A Sudoku puzzle generator, player, and solver written in C# .NET using the WPF framework.
      `,
      links: [
        {
          url: "https://github.com/mustafakalash/sudoku",
          icon: faGithub
        }
      ],
      keywords: ["C#", ".NET", "WPF"]
    },
    {
      title: "UILib",
      images: [],
      description: `
        A C++ library for creating interactive UI on the touchscreens of the brains of a VEX V5 robot.
      `,
      links: [
        {
          url: "https://github.com/mustafakalash/UILib",
          icon: faGithub
        }
      ],
      keywords: ["C++", "VEX V5", "Robotics", "Library"]
    },
    {
      title: "Advent of Code 2022",
      images: [],
      description: `
        See Advent of Code 2024. I also used Python throughout 2022, but did not have the time to finish every puzzle.
      `,
      links: [
        {
          url: "https://github.com/mustafakalash/AoC2022",
          icon: faGithub
        }
      ],
      keywords: ["Similar to 2024"]
    }
  ]
}
