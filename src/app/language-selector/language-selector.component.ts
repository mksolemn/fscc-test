import {Component, Input, Output} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";

type Language = {
  icon: string,
  label: string,
  languageCode: string
}

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})

export class LanguageSelectorComponent {
  languages: Language[] = [
    {
      icon: 'twemoji_flag-lithuania.svg',
      label: 'Lietuvių',
      languageCode: 'LT'
    },
    {
      icon: 'twemoji_flag-latvia.svg',
      label: 'Latvių',
      languageCode: 'LV'
    },
    {
      icon: 'emojione-v1_flag-for-united-kingdom.svg',
      label: 'Anglų',
      languageCode: 'EN'
    },
  ];
  @Output('selectedLanguage') selectedLanguage: Language = this.languages[0];
  isOpen: boolean = false;

  constructor() {
  }

  onLanguageSelect(index: number) {
    this.selectedLanguage = this.languages[index];
    this.isOpen = false;
  }
}
