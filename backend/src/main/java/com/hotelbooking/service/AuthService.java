package com.hotelbooking.service;

import com.hotelbooking.dto.ApiResponse;
import com.hotelbooking.dto.AuthRequest;
import com.hotelbooking.dto.AuthResponse;

public interface AuthService {
    ApiResponse<AuthResponse> register(AuthRequest request);
    ApiResponse<AuthResponse> login(AuthRequest request);
}
