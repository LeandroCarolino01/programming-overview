import { Injectable } from '@angular/core';
import { Language } from './language';
import { LANGUAGES } from './mock-languages';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private message:MessageService) { }

  getLanguages(): Observable<Language[]> {
    this.message.add('Language service: fetched languages')
    return of(LANGUAGES);
  }

  getLanguage(id: number): Observable<Language> {
    this.message.add(`Hero service: fetched id${id}`)
    return of(LANGUAGES.find(language => language.id === id))
  }
}
