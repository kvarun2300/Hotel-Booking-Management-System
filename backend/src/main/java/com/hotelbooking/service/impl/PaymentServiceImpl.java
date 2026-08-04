package com.hotelbooking.service.impl;

import com.hotelbooking.dto.ApiResponse;
import com.hotelbooking.model.entity.Payment;
import com.hotelbooking.repository.PaymentRepository;
import com.hotelbooking.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository paymentRepository;

    @Override
    public ApiResponse<Payment> createPayment(Payment payment) {
        return new ApiResponse<>(true, "Payment recorded successfully", paymentRepository.save(payment));
    }
}
