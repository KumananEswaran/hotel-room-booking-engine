import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCards } from './room-cards';

describe('RoomCards', () => {
  let component: RoomCards;
  let fixture: ComponentFixture<RoomCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
