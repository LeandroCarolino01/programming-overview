import { Injectable } from '@angular/core';
import { Language } from './language';
import { LANGUAGES } from './mock-languages';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  languages = LANGUAGES;
  constructor(private message:MessageService) { }

  getLanguages(): Observable<Language[]> {
    this.message.add('Language service: fetched languages')
    return of(this.languages);
  }
}
