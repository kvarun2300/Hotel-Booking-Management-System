# API Documentation

## Authentication

### Register User
- POST `/api/auth/register`
- Body:
  ```json
  {
    "username": "john",
    "email": "john@example.com",
    "password": "StrongPass123",
    "firstName": "John",
    "lastName": "Doe"
  }
  ```

### Login User
- POST `/api/auth/login`
- Body:
  ```json
  {
    "username": "john",
    "password": "StrongPass123"
  }
  ```

## Hotels

### Get all hotels
- GET `/api/hotels`

### Get hotel by id
- GET `/api/hotels/{id}`

### Create hotel
- POST `/api/hotels`
- Requires `ADMIN` role

### Update hotel
- PUT `/api/hotels/{id}`
- Requires `ADMIN` role

### Delete hotel
- DELETE `/api/hotels/{id}`
- Requires `ADMIN` role

## Rooms

### Get all rooms
- GET `/api/rooms`

### Get room by id
- GET `/api/rooms/{id}`

### Create room
- POST `/api/rooms`
- Requires `ADMIN` role

### Update room
- PUT `/api/rooms/{id}`
- Requires `ADMIN` role

### Delete room
- DELETE `/api/rooms/{id}`
- Requires `ADMIN` role

## Bookings

### Get all bookings
- GET `/api/bookings`
- Requires authenticated user

### Create booking
- POST `/api/bookings`
- Requires `CUSTOMER` role

### Update booking
- PUT `/api/bookings/{id}`
- Requires authenticated user

### Delete booking
- DELETE `/api/bookings/{id}`
- Requires authenticated user

## Payments

### Create payment
- POST `/api/payments`
- Requires authenticated user

## Reviews

### Get all reviews
- GET `/api/reviews`

### Create review
- POST `/api/reviews`
- Requires authenticated user
