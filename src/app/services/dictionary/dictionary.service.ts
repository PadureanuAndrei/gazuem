import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

const testData = ['Andrei', 'Derji', 'Hui', 'Bodrei'];

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private _words$ = new BehaviorSubject<Set<string>>(new Set(this.initialData()));
  words$ = this._words$.asObservable();

  constructor() {
    this.words$.subscribe(words => {
      const data = JSON.stringify([...words]);
      localStorage.setItem('dictionaryWords', data);
    })
  }

  add(word: string): void {
    const words = new Set([...this._words$.value, word]);
    this._words$.next(words);
  }

  remove(word: string): void {
    const words = new Set(this._words$.value);
    words.delete(word);
    this._words$.next(words);
  }

  clear() {
    this._words$.next(new Set());
  }

  private initialData(): string[] {
    return JSON.parse(localStorage.getItem('dictionaryWords') || '[]') as string[];
  }
}
