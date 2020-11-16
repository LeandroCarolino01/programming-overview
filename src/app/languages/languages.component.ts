import { Component, OnInit } from '@angular/core';
import { Language } from '../language';
import { LANGUAGES } from '../mock-languages';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  //This binds to the array of mock data to be rendered in the template
  languages =   LANGUAGES;
  selectedLanguage: Language;
  constructor() { }

  ngOnInit() {
  }

  onSelect(language:Language){
    this.selectedLanguage = language
  }

}
