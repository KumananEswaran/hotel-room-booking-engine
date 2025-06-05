import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../../Rooms';
import { RoomItem } from '../room-item/room-item';
import { RoomServices } from '../../services/room-services';
import { BookRoomModal } from '../book-room-modal/book-room-modal';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-room-cards',
  standalone: true,
  imports: [CommonModule, RoomItem, BookRoomModal, MatSnackBarModule],
  templateUrl: './room-cards.html',
  styleUrl: './room-cards.css',
})

// export class RoomCards {
//   rooms: Room[] = [];

//   selectedRoom: Room | null = null;
//   showModal = false;

//   constructor(
//     private roomService: RoomServices,
//     private snackBar: MatSnackBar
//   ) {}

//   ngOnInit(): void {
//     const storedRooms = localStorage.getItem('rooms');
//     if (storedRooms) {
//       this.rooms = JSON.parse(storedRooms);
//     } else {
//       this.roomService.getRooms().subscribe((rooms) => (this.rooms = rooms));
//     }
//   }

//   onBook(room: Room) {
//     this.selectedRoom = room;
//     this.showModal = true;
//   }

//   closeModal() {
//     this.showModal = false;
//     this.selectedRoom = null;
//   }

//   handleBooking(bookingData: any) {
//     if (this.selectedRoom) {
//       this.selectedRoom.available = false;
//       localStorage.setItem('rooms', JSON.stringify(this.rooms));
//       this.showSuccessToast('Room booked successfully!');
//       this.closeModal();
//     }
//   }

//   showSuccessToast(message: string) {
//     this.snackBar.open(message, 'Close', {
//       duration: 3000,
//       horizontalPosition: 'center',
//       verticalPosition: 'top',
//     });
//   }
// }
export class RoomCards {
  rooms: Room[] = [];
  filteredRooms: Room[] = [];

  selectedRoom: Room | null = null;
  showModal = false;

  roomTypes: string[] = [];
  roomTypeFilter = '';

  constructor(
    private roomService: RoomServices,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const storedRooms = localStorage.getItem('rooms');
    if (storedRooms) {
      this.rooms = JSON.parse(storedRooms);
      this.setRoomTypes();
      this.applyFilter();
    } else {
      this.roomService.getRooms().subscribe((rooms) => {
        this.rooms = rooms;
        this.setRoomTypes();
        this.applyFilter();
      });
    }
  }

  setRoomTypes() {
    // get unique room types from rooms
    const types = this.rooms.map((room) => room.type);
    this.roomTypes = Array.from(new Set(types));
  }

  applyFilter() {
    if (!this.roomTypeFilter) {
      this.filteredRooms = this.rooms;
    } else {
      this.filteredRooms = this.rooms.filter(
        (room) => room.type === this.roomTypeFilter
      );
    }
  }

  onFilterChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.roomTypeFilter = select.value;
    this.applyFilter();
  }

  onBook(room: Room) {
    this.selectedRoom = room;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedRoom = null;
  }

  handleBooking(bookingData: any) {
    if (this.selectedRoom) {
      this.selectedRoom.available = false;
      localStorage.setItem('rooms', JSON.stringify(this.rooms));
      this.showSuccessToast('Room booked successfully!');
      this.closeModal();
    }
  }

  showSuccessToast(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
