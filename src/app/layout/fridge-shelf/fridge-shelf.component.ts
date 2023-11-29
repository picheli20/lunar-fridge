import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-fridge-shelf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fridge-shelf.component.html',
  styleUrl: './fridge-shelf.component.scss'
})
export class FridgeShelfComponents {
  @Input() height = 100;
  @Input() text = '';

}
