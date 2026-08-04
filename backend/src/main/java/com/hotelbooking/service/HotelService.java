package com.hotelbooking.service;

import com.hotelbooking.dto.ApiResponse;
import com.hotelbooking.model.entity.Hotel;

import java.util.List;

public interface HotelService {
    ApiResponse<List<Hotel>> getAllHotels();
    ApiResponse<Hotel> getHotel(Long id);
    ApiResponse<Hotel> createHotel(Hotel hotel);
    ApiResponse<Hotel> updateHotel(Long id, Hotel hotel);
    ApiResponse<Void> deleteHotel(Long id);
}
