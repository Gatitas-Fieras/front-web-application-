import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  @Input() studentView!: Boolean;
  @Input() tutorView!: Boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
