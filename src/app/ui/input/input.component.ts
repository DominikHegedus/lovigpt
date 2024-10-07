import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat.service';
import { Conversation } from '../../models/conversation.model';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  chatService = inject(ChatService);

  form = new FormGroup({
    prompt: new FormControl(''),
  });

  onSubmit() {
    const conversation: Conversation = {
      prompt: this.form.controls.prompt.value ?? '',
      response: this.chatService.generateResponse(),
    };
    this.chatService.add(conversation);
    this.form.controls.prompt.reset();
  }
}
