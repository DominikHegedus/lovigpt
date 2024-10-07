import { Injectable } from '@angular/core';
import { SignalArrayStoreService } from '../base/signal-array-store-service.base';
import { Conversation } from '../models/conversation.model';
import { getResponseArray } from '../resources/response.options';

@Injectable({ providedIn: 'root' })
export class ChatService extends SignalArrayStoreService<Conversation> {
  constructor() {
    super();
  }

  generateResponse() {
    const responseArray = getResponseArray();
    const randomElement =
      responseArray[Math.floor(Math.random() * responseArray.length)];
    return randomElement;
  }
}
