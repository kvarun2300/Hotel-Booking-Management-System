package com.hotelbooking.service;

import com.hotelbooking.dto.ApiResponse;
import com.hotelbooking.model.entity.Review;

import java.util.List;

public interface ReviewService {
    ApiResponse<List<Review>> getAllReviews();
    ApiResponse<Review> createReview(Review review);
}
