import { Component } from '@angular/core';
import {DictionaryService} from "../../services";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent {

  dictionary$: Observable<Iterable<string>>

  constructor(private dictionaryService: DictionaryService) {
    this.dictionary$ = dictionaryService.words$.pipe(map(x => {
      return [...x].sort();
    }));
  }

  removeWord(word: string): void {
    console.log(word);
    this.dictionaryService.remove(word);
  }

  addWord(word: string): void {
    this.dictionaryService.add(word);
  }

  clear(): void {
    this.dictionaryService.clear();
  }
}
