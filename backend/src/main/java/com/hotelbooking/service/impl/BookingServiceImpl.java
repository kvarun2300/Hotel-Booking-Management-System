package com.hotelbooking.service.impl;

import com.hotelbooking.dto.ApiResponse;
import com.hotelbooking.model.entity.Booking;
import com.hotelbooking.repository.BookingRepository;
import com.hotelbooking.service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;

    @Override
    public ApiResponse<List<Booking>> getAllBookings() {
        return new ApiResponse<>(true, "Bookings retrieved successfully", bookingRepository.findAll());
    }

    @Override
    public ApiResponse<Booking> createBooking(Booking booking) {
        return new ApiResponse<>(true, "Booking created successfully", bookingRepository.save(booking));
    }

    @Override
    public ApiResponse<Booking> updateBooking(Long id, Booking booking) {
        return bookingRepository.findById(id)
                .map(existing -> {
                    existing.setCheckInDate(booking.getCheckInDate());
                    existing.setCheckOutDate(booking.getCheckOutDate());
                    existing.setTotalAmount(booking.getTotalAmount());
                    existing.setBookingStatus(booking.getBookingStatus());
                    return new ApiResponse<>(true, "Booking updated successfully", bookingRepository.save(existing));
                })
                .orElseGet(() -> new ApiResponse<>(false, "Booking not found", null));
    }

    @Override
    public ApiResponse<Void> deleteBooking(Long id) {
        if (bookingRepository.existsById(id)) {
            bookingRepository.deleteById(id);
            return new ApiResponse<>(true, "Booking deleted successfully", null);
        }
        return new ApiResponse<>(false, "Booking not found", null);
    }
}
