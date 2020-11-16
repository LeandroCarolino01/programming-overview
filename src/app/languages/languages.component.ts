import { Component, OnInit } from '@angular/core';
import { Language } from '../language';
import { LanguageService } from '../language.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  //This binds to the array of mock data to be rendered in the template
  languages:  Language[];
  selectedLanguage: Language;

  constructor(private languageService:LanguageService, private messages:MessageService) { }

  ngOnInit() {
    this.getLanguages();
  }

  onSelect(language:Language){
    this.selectedLanguage = language
    this.messages.add(`Languages Component: Selected Language id is ${language.id}`)
  }

  getLanguages(): void {
     this.languageService.getLanguages()
       .subscribe(languages => this.languages = languages)
  }

}
