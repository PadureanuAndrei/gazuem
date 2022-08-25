import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { FormComponent } from './components/form/form.component';
import { WordComponent } from './components/word/word.component';
import { AddWordComponent } from './components/dictionary/add-word/add-word.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddWordsComponent } from './components/dictionary/add-words/add-words.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    FormComponent,
    WordComponent,
    AddWordComponent,
    AddWordsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
