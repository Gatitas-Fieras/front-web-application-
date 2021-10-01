import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  constructor() {
  }
}


