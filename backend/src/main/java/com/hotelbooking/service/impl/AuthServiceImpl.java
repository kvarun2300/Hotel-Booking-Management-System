package com.hotelbooking.service.impl;

import com.hotelbooking.dto.ApiResponse;
import com.hotelbooking.dto.AuthRequest;
import com.hotelbooking.dto.AuthResponse;
import com.hotelbooking.model.entity.User;
import com.hotelbooking.model.enums.ERole;
import com.hotelbooking.repository.UserRepository;
import com.hotelbooking.security.JwtService;
import com.hotelbooking.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    @Override
    public ApiResponse<AuthResponse> register(AuthRequest request) {
        if (userRepository.findByUsername(request.getUsername()).isPresent()) {
            return new ApiResponse<>(false, "Username already exists", null);
        }
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return new ApiResponse<>(false, "Email already exists", null);
        }

        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .role(ERole.CUSTOMER)
                .build();

        userRepository.save(user);
        return buildAuthResponse(request.getUsername(), "CUSTOMER");
    }

    @Override
    public ApiResponse<AuthResponse> login(AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );

        return buildAuthResponse(request.getUsername(), userRepository.findByUsername(request.getUsername())
                .map(user -> user.getRole().name())
                .orElse("CUSTOMER"));
    }

    private ApiResponse<AuthResponse> buildAuthResponse(String username, String role) {
        UserDetails userDetails = new org.springframework.security.core.userdetails.User(
                username,
                "",
                java.util.List.of(new org.springframework.security.core.authority.SimpleGrantedAuthority("ROLE_" + role))
        );

        String token = jwtService.generateToken(userDetails);
        return new ApiResponse<>(true, "Authentication successful", new AuthResponse(token, username, role));
    }
}
