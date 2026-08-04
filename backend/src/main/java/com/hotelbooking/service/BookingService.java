package com.hotelbooking.service;

import com.hotelbooking.dto.ApiResponse;
import com.hotelbooking.model.entity.Booking;

import java.util.List;

public interface BookingService {
    ApiResponse<List<Booking>> getAllBookings();
    ApiResponse<Booking> createBooking(Booking booking);
    ApiResponse<Booking> updateBooking(Long id, Booking booking);
    ApiResponse<Void> deleteBooking(Long id);
}
