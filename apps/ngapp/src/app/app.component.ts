import { Component, Input } from '@angular/core';

@Component({
  selector: 'reastor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() name = 'katerina';
  @Input() age = 33;
  @Input() happy = true;
}
