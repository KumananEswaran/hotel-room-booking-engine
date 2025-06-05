# RoomBookingEngine

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.0.

## How to Run the Application 

### Install dependencies

```
npm install
```

### Start the Angular development server (runs on http://localhost:4200)

```
ng serve
```

### In a separate terminal, start the JSON server (runs on http://localhost:5000):

```
npm run server
```
This project uses a local mock server (json-server) to simulate API calls instead of mocking with of(...) in the service.

## Design Decisions

Modular Components: Used Angular standalone components (RoomItem, RoomCards, BookRoomModal) to keep the architecture clean and reusable.

Mock API: Utilized json-server with mock data to simulate backend responses, satisfying the requirement for a local mock service.

State Persistence: Room booking status is saved in localStorage so users see updates even after refreshing the page.

Reactive Modal UX: Room booking modal is controlled by component state (showModal) for a responsive UI.

User Notifications: Integrated Angular Material’s MatSnackBar to provide feedback after successful bookings.
