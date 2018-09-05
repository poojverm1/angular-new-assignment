import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allObj = [
    {
      "url": "https://www.anapioficeandfire.com/api/characters/583",
      "name": "Jon Snow",
      "gender": "Male",
      "culture": "Northmen",
      "born": "In 283 AC",
      "died": "",
      "titles": [
        "Lord Commander of the Night's Watch"
      ],
      "aliases": [
        "Lord Snow",
        "Ned Stark's Bastard",
        "The Snow of Winterfell",
        "The Crow-Come-Over",
        "The 998th Lord Commander of the Night's Watch",
        "The Bastard of Winterfell",
        "The Black Bastard of the Wall",
        "Lord Crow"
      ],
      "father": "",
      "mother": "",
      "spouse": "",
      "allegiances": [
        "https://www.anapioficeandfire.com/api/houses/362"
      ],
      "books": [
        "https://www.anapioficeandfire.com/api/books/5"
      ],
      "povBooks": [
        "https://www.anapioficeandfire.com/api/books/1",
        "https://www.anapioficeandfire.com/api/books/2",
        "https://www.anapioficeandfire.com/api/books/3",
        "https://www.anapioficeandfire.com/api/books/8"
      ],
      "tvSeries": [
        "Season 1",
        "Season 2",
        "Season 3",
        "Season 4",
        "Season 5",
        "Season 6"
      ],
      "playedBy": [
        "Kit Harington"
      ]
    },
    {
      "url": "https://www.anapioficeandfire.com/api/characters/583",
      "name": "Jon Snow",
      "gender": "Male",
      "culture": "Northmen",
      "born": "In 283 AC",
      "died": "",
      "titles": [
        "Lord Commander of the Night's Watch"
      ],
      "aliases": [
        "Lord Snow",
        "Ned Stark's Bastard",
        "The Snow of Winterfell",
        "The Crow-Come-Over",
        "The 998th Lord Commander of the Night's Watch",
        "The Bastard of Winterfell",
        "The Black Bastard of the Wall",
        "Lord Crow"
      ],
      "father": "",
      "mother": "",
      "spouse": "",
      "allegiances": [
        "https://www.anapioficeandfire.com/api/houses/362"
      ],
      "books": [
        "https://www.anapioficeandfire.com/api/books/5"
      ],
      "povBooks": [
        "https://www.anapioficeandfire.com/api/books/1",
        "https://www.anapioficeandfire.com/api/books/2",
        "https://www.anapioficeandfire.com/api/books/3",
        "https://www.anapioficeandfire.com/api/books/8"
      ],
      "tvSeries": [
        "Season 1",
        "Season 2",
        "Season 3",
        "Season 4",
        "Season 5",
        "Season 6"
      ],
      "playedBy": [
        "Kit Harington"
      ]
    },
    {
      "url": "https://www.anapioficeandfire.com/api/characters/583",
      "name": "Jon Snow",
      "gender": "Male",
      "culture": "Northmen",
      "born": "In 283 AC",
      "died": "",
      "titles": [
        "Lord Commander of the Night's Watch"
      ],
      "aliases": [
        "Lord Snow",
        "Ned Stark's Bastard",
        "The Snow of Winterfell",
        "The Crow-Come-Over",
        "The 998th Lord Commander of the Night's Watch",
        "The Bastard of Winterfell",
        "The Black Bastard of the Wall",
        "Lord Crow"
      ],
      "father": "",
      "mother": "",
      "spouse": "",
      "allegiances": [
        "https://www.anapioficeandfire.com/api/houses/362"
      ],
      "books": [
        "https://www.anapioficeandfire.com/api/books/5"
      ],
      "povBooks": [
        "https://www.anapioficeandfire.com/api/books/1",
        "https://www.anapioficeandfire.com/api/books/2",
        "https://www.anapioficeandfire.com/api/books/3",
        "https://www.anapioficeandfire.com/api/books/8"
      ],
      "tvSeries": [
        "Season 1",
        "Season 2",
        "Season 3",
        "Season 4",
        "Season 5",
        "Season 6"
      ],
      "playedBy": [
        "Kit Harington"
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
    console.log("Home component");
    console.log(this.allObj);
  }

}
