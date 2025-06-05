import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-room-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-room-modal.html',
  styleUrl: './book-room-modal.css',
})
export class BookRoomModal {
  @Input() room: any;
  @Input() show = false;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<any>();

  guestName = '';
  checkInDate = '';
  checkOutDate = '';

  onSubmit() {
    const bookingData = {
      room: this.room,
      guestName: this.guestName,
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate,
    };
    this.submit.emit(bookingData);
    this.close.emit();
  }
}
