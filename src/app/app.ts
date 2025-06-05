import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { RoomCards } from './components/room-cards/room-cards';

@Component({
  selector: 'app-root',
  imports: [Header, RoomCards],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'room-booking-engine';
}
