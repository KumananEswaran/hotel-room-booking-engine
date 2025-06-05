import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRoomModal } from './book-room-modal';

describe('BookRoomModal', () => {
  let component: BookRoomModal;
  let fixture: ComponentFixture<BookRoomModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookRoomModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookRoomModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
