import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {DictionaryService} from "../../../services";

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent {

  word = new FormControl('');

  constructor(private dictionaryService: DictionaryService) {
  }

  submit() {
    const text = (this.word.value || '')
    console.log(text)
    text.split(' ').filter(x => !!x).forEach(word => {
      console.log(word)
      this.dictionaryService.add(word)
    });

    this.word.setValue('');
  }
}
