package com.hotelbooking.service.impl;

import com.hotelbooking.dto.ApiResponse;
import com.hotelbooking.model.entity.Hotel;
import com.hotelbooking.repository.HotelRepository;
import com.hotelbooking.service.HotelService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HotelServiceImpl implements HotelService {

    private final HotelRepository hotelRepository;

    @Override
    public ApiResponse<List<Hotel>> getAllHotels() {
        return new ApiResponse<>(true, "Hotels retrieved successfully", hotelRepository.findAll());
    }

    @Override
    public ApiResponse<Hotel> getHotel(Long id) {
        return hotelRepository.findById(id)
                .map(hotel -> new ApiResponse<>(true, "Hotel retrieved successfully", hotel))
                .orElseGet(() -> new ApiResponse<>(false, "Hotel not found", null));
    }

    @Override
    public ApiResponse<Hotel> createHotel(Hotel hotel) {
        return new ApiResponse<>(true, "Hotel created successfully", hotelRepository.save(hotel));
    }

    @Override
    public ApiResponse<Hotel> updateHotel(Long id, Hotel hotel) {
        return hotelRepository.findById(id)
                .map(existing -> {
                    existing.setHotelName(hotel.getHotelName());
                    existing.setCity(hotel.getCity());
                    existing.setState(hotel.getState());
                    existing.setCountry(hotel.getCountry());
                    existing.setAddress(hotel.getAddress());
                    existing.setDescription(hotel.getDescription());
                    existing.setRating(hotel.getRating());
                    existing.setPhone(hotel.getPhone());
                    existing.setEmail(hotel.getEmail());
                    existing.setImageUrl(hotel.getImageUrl());
                    return new ApiResponse<>(true, "Hotel updated successfully", hotelRepository.save(existing));
                })
                .orElseGet(() -> new ApiResponse<>(false, "Hotel not found", null));
    }

    @Override
    public ApiResponse<Void> deleteHotel(Long id) {
        if (hotelRepository.existsById(id)) {
            hotelRepository.deleteById(id);
            return new ApiResponse<>(true, "Hotel deleted successfully", null);
        }
        return new ApiResponse<>(false, "Hotel not found", null);
    }
}
