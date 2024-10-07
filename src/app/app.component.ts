import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrameComponent } from './ui/frame/frame.component';
import { InputComponent } from './ui/input/input.component';
import { MatIconRegistry } from '@angular/material/icon';
import { ChatService } from './services/chat.service';
import { concat, delay, ignoreElements, interval, map, of, take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FrameComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  matIconReg = inject(MatIconRegistry);
  chatService = inject(ChatService);

  $conversation = this.chatService.$all();

  ngOnInit(): void {
    this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
  }
}
