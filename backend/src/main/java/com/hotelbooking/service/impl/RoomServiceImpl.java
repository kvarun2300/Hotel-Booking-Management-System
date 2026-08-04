package com.hotelbooking.service.impl;

import com.hotelbooking.dto.ApiResponse;
import com.hotelbooking.model.entity.Room;
import com.hotelbooking.repository.RoomRepository;
import com.hotelbooking.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoomServiceImpl implements RoomService {

    private final RoomRepository roomRepository;

    @Override
    public ApiResponse<List<Room>> getAllRooms() {
        return new ApiResponse<>(true, "Rooms retrieved successfully", roomRepository.findAll());
    }

    @Override
    public ApiResponse<Room> getRoom(Long id) {
        return roomRepository.findById(id)
                .map(room -> new ApiResponse<>(true, "Room retrieved successfully", room))
                .orElseGet(() -> new ApiResponse<>(false, "Room not found", null));
    }

    @Override
    public ApiResponse<Room> createRoom(Room room) {
        return new ApiResponse<>(true, "Room created successfully", roomRepository.save(room));
    }

    @Override
    public ApiResponse<Room> updateRoom(Long id, Room room) {
        return roomRepository.findById(id)
                .map(existing -> {
                    existing.setRoomNumber(room.getRoomNumber());
                    existing.setRoomType(room.getRoomType());
                    existing.setPrice(room.getPrice());
                    existing.setCapacity(room.getCapacity());
                    existing.setAvailability(room.getAvailability());
                    existing.setImageUrl(room.getImageUrl());
                    return new ApiResponse<>(true, "Room updated successfully", roomRepository.save(existing));
                })
                .orElseGet(() -> new ApiResponse<>(false, "Room not found", null));
    }

    @Override
    public ApiResponse<Void> deleteRoom(Long id) {
        if (roomRepository.existsById(id)) {
            roomRepository.deleteById(id);
            return new ApiResponse<>(true, "Room deleted successfully", null);
        }
        return new ApiResponse<>(false, "Room not found", null);
    }
}
