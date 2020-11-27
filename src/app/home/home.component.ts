import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [
    'https://www.societe-nettoyage-lyon.com/wp-content/uploads/2017/09/cleaning-268112_1920.jpg',
    'https://www.societe-nettoyage-lyon.com/wp-content/uploads/2019/03/Lyon-Ville-Propre.jpg',
    'https://www.societe-nettoyage-lyon.com/wp-content/uploads/2017/09/Slide-3-JPG.jpg',
    'https://www.societe-nettoyage-lyon.com/wp-content/uploads/2017/10/Nettoyage-Lyon-Entreprise-Societe-2-1.jpg',
  ];

  constructor() { }

  ngOnInit(): void {

  }
}
