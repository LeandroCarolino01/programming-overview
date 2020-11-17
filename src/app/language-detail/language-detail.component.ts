import { Component, OnInit, Input } from '@angular/core';
import { Language } from '../language';
import { LanguageService } from '../language.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-language-detail',
  templateUrl: './language-detail.component.html',
  styleUrls: ['./language-detail.component.css']
})
export class LanguageDetailComponent implements OnInit {
  language: Language;
  constructor(
    private route: ActivatedRoute,
    private languageService: LanguageService,
    private location: Location
    ) { }

  ngOnInit() {
    this.getLanguage();
  }

  getLanguage(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.languageService.getLanguage(id)
      .subscribe(language => this.language = language)
  }

  goBack(){
    this.location.back();
  }
}
