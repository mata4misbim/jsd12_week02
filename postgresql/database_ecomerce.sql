-- 1. ล้างข้อมูลเก่าแบบ CASCADE (ลบต่อเนื่องทุกตารางที่เกี่ยวข้องกัน)
TRUNCATE TABLE Suppliers, Ingredients, Staff, MenuItems, RecipeItems, Orders, OrderItems RESTART IDENTITY CASCADE;

-- 2. เพิ่มข้อมูลสินค้า (ตรงกับ JS: 101, 102, 103)
INSERT INTO MenuItems (item_id, name, description, price, category) VALUES
(101, 'อาหารแมว (แซลม่อน)', 'อาหารแมวเกรดพรีเมียมรสแซลมอน', 450.00, 'Food'),
(102, 'ของเล่นไม้ตกแมว', 'ไม้ตกแมวช่วยฝึกทักษะ', 120.00, 'Toys'),
(103, 'กระเป๋าแมว', 'กระเป๋าใส่สัตว์เลี้ยงขนาดกลาง', 850.00, 'Accessories');

-- 3. เพิ่มข้อมูลผู้ใช้/พนักงาน (ตรงกับ JS: 1, 2)
INSERT INTO Staff (staff_id, first_name, last_name, role) VALUES
(1, 'Admin', 'Oh', 'admin'),
(2, 'Metha', 'Customer', 'customer');

-- 4. เพิ่มข้อมูลซัพพลายเออร์
INSERT INTO Suppliers (supplier_id, name, contact_person) VALUES
(1, 'Pet World Co., Ltd.', 'คุณสมชาย');

-- 5. เพิ่มข้อมูลการสั่งซื้อ (ตรงกับ JS: 5001)
INSERT INTO Orders (order_id, total_price, staff_id, order_date) VALUES
(5001, 570.00, 2, '2026-03-10 14:30:00');

-- 6. เพิ่มรายการสินค้าในคำสั่งซื้อ (ตรงกับ JS: 9001, 9002)
INSERT INTO OrderItems (order_item_id, order_id, item_id, quantity) VALUES
(9001, 5001, 101, 1),
(9002, 5001, 102, 1);

