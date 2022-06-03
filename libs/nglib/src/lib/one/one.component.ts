import { Component, Input } from '@angular/core';

@Component({
  selector: 'reastor-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent {
  @Input() name = 'katerina';
  @Input() age = 33;
  @Input() happy = true;
}
