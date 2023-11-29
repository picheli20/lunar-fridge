import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { FirdgeItems, FridgeService } from '../../services/fridge.service';
import { FridgeShelfComponents } from '../fridge-shelf/fridge-shelf.component';


@Component({
  selector: 'app-fridges',
  standalone: true,
  imports: [CommonModule, FridgeShelfComponents],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './fridges.component.html',
  styleUrl: './fridges.component.scss'
})
export class FridgesComponents implements OnInit {
  readonly fridgeService = inject(FridgeService);

  selected = 1;
  fridgesSignal = signal<FirdgeItems>({
    1: { shelfs: [] },
    2: { shelfs: [] },
    3: { shelfs: [] },
  });


  ngOnInit() {
    this.load();
  }

  async load() {
    const fridges = await this.fridgeService.load();

    this.fridgesSignal.set(fridges);
  }

  async save(id: '1' | '2' | '3', index: number, newValue: string) {
    const currentValue = this.fridgesSignal();

    currentValue[id].shelfs[index] = newValue;

    await this.fridgeService.update(id, currentValue[id].shelfs);

    this.load();
  }

}
