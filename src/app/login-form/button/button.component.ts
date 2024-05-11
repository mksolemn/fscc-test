import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NgClass, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatSuffix} from "@angular/material/form-field";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    NgClass,
    MatSuffix,
    NgIf
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input('size') size: 'sm' | 'md' | 'lg' = 'md';
  @Input('color') color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input('disabled') disabled!: boolean;
  @Input('icon') icon:boolean = false;
}
