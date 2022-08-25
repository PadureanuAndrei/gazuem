import { Component, OnInit } from '@angular/core';
import {DictionaryService, RandomService} from "../../services";
import {take} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  values: string[] = []
  countControl = new FormControl(12);

  constructor(private dictionaryService: DictionaryService,
              private randomService: RandomService) { }


  shuffle() {
    this.dictionaryService.words$.pipe(take(1))
      .subscribe(x => this.values = this.randomService.randomize(x, this.countControl.value || 12))
  }

}
