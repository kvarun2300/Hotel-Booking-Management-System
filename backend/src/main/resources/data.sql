INSERT INTO hotels (hotel_name, city, state, country, address, description, rating, phone, email, image_url) VALUES
('Grand Plaza', 'Mumbai', 'Maharashtra', 'India', 'Near Marine Drive', 'Luxury hotel in the heart of Mumbai.', 4.8, '+91-2222222222', 'grandplaza@example.com', 'https://images.unsplash.com/photo-1566073771259-6a8506099945'),
('Ocean View', 'Goa', 'Goa', 'India', 'Baga Beach Road', 'Beachfront resort with premium amenities.', 4.6, '+91-3333333333', 'oceanview@example.com', 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa')
ON DUPLICATE KEY UPDATE hotel_name = VALUES(hotel_name);

INSERT INTO rooms (hotel_id, room_number, room_type, price, capacity, availability, image_url) VALUES
(1, '101', 'DELUXE', 4500.00, 2, true, 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85'),
(1, '205', 'SUITE', 7200.00, 4, true, 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85'),
(2, '301', 'STANDARD', 3200.00, 2, true, 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')
ON DUPLICATE KEY UPDATE room_number = VALUES(room_number);

INSERT INTO users (username, email, password, first_name, last_name, role) VALUES
('admin', 'admin@example.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'System', 'Admin', 'ADMIN'),
('customer', 'customer@example.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'Test', 'Customer', 'CUSTOMER')
ON DUPLICATE KEY UPDATE username = VALUES(username);
