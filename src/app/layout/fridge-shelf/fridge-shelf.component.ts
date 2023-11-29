import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-fridge-shelf',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './fridge-shelf.component.html',
  styleUrl: './fridge-shelf.component.scss'
})
export class FridgeShelfComponents {
  @Input() height = 100;
  @Input() text = '';

  @Output() save = new EventEmitter<string>();

  modelText = this.text;

  editingSignal = signal(false);

  edit() {
    this.modelText = this.text;
    this.editingSignal.set(true);
  }

  submit() {
    this.editingSignal.set(false);
    this.save.next(this.modelText);
  }

  cancel() {
    this.editingSignal.set(false);
  }
}
