package com.hotelbooking.service.impl;

import com.hotelbooking.dto.ApiResponse;
import com.hotelbooking.model.entity.Review;
import com.hotelbooking.repository.ReviewRepository;
import com.hotelbooking.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;

    @Override
    public ApiResponse<List<Review>> getAllReviews() {
        return new ApiResponse<>(true, "Reviews retrieved successfully", reviewRepository.findAll());
    }

    @Override
    public ApiResponse<Review> createReview(Review review) {
        return new ApiResponse<>(true, "Review created successfully", reviewRepository.save(review));
    }
}
