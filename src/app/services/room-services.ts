import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../Rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomServices {
  private apiUrl = 'http://localhost:5000/rooms';

  constructor(private http: HttpClient) {}

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl);
  }
}
