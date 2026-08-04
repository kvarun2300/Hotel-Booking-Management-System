package com.hotelbooking.service;

import com.hotelbooking.dto.ApiResponse;
import com.hotelbooking.model.entity.Room;

import java.util.List;

public interface RoomService {
    ApiResponse<List<Room>> getAllRooms();
    ApiResponse<Room> getRoom(Long id);
    ApiResponse<Room> createRoom(Room room);
    ApiResponse<Room> updateRoom(Long id, Room room);
    ApiResponse<Void> deleteRoom(Long id);
}
