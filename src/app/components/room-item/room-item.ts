import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Room } from '../../Rooms';

@Component({
  selector: 'app-room-item',
  standalone: true,
  imports: [],
  templateUrl: './room-item.html',
  styleUrl: './room-item.css',
})
export class RoomItem {
  @Input() room!: Room;

  @Output() book = new EventEmitter();

  onBookClick() {
    this.book.emit(this.room);
  }
}
