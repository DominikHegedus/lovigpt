import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { FrameComponent } from '../../ui/frame/frame.component';
import { InputComponent } from '../../ui/input/input.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FrameComponent, InputComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {
  @ViewChild('focusArea') focusArea!: ElementRef<HTMLElement>;

  chatService = inject(ChatService);

  $conversation = this.chatService.$all();

  onSubmit() {
    this.focusArea.nativeElement.focus();
  }
}
