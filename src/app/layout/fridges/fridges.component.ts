import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FridgeShelfComponents } from '../fridge-shelf/fridge-shelf.component';


@Component({
  selector: 'app-fridges',
  standalone: true,
  imports: [CommonModule, FridgeShelfComponents],
  templateUrl: './fridges.component.html',
  styleUrl: './fridges.component.scss'
})
export class FridgesComponents {
  selected = 1;

}
