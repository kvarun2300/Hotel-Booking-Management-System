package com.hotelbooking.service;

import com.hotelbooking.dto.ApiResponse;
import com.hotelbooking.model.entity.Payment;

public interface PaymentService {
    ApiResponse<Payment> createPayment(Payment payment);
}
