

import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ["Desenvolvedora Front-end", "Analista de Dados", "Web Designer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    };
    
    new Typed(".typing-text", options);
  }

}
