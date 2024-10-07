import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameComponent {}
