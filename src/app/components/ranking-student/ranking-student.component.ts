import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-ranking-student',
  templateUrl: './ranking-student.component.html',
  styleUrls: ['./ranking-student.component.css']
})
export class RankingStudentComponent  {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  constructor() { }


}
