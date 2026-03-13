// 1. ข้อมูลผู้ใช้ (User Entities) แบบแยก role 
const users = [
  {
    id: 1,
    username: "admin_oh",
    email: "oh@gmailkaka.com",
    password: "password_123", // รหัสตัวอย่าง
    role: "admin",
  },
  {
    id: 2,
    username: "metha_customer",
    email: "metha@gmailkaka.com",
    password: "password_456",
    role: "customer",
    address: "123 Main St, Bangkok, Thailand",
  },
];

// 2. ข้อมูลสินค้า (Product Entities)
const products = [
  {
    id: 101,
    name: "อาหารแมว (แซลม่อน)",
    price: 450,
    stock_quantity: 50,
    category: "Food",
  },
  {
    id: 102,
    name: "ของเล่นไม้ตกแมว",
    price: 120,
    stock_quantity: 30,
    category: "Toys",
  },
  {
    id: 103,
    name: "กระเป๋าแมว",
    price: 850,
    stock_quantity: 10,
    category: "Accessories",
  },
];

// 3. ข้อมูลการสั่งซื้อ (Order Entities)
const orders = [
  {
    id: 5001,
    user_id: 2, // อ้างอิงถึง metha_customer
    total_price: 570,
    status: "Pending", // สถานะ: รอชำระเงิน
    created_at: "2026-03-10T14:30:00Z",
  },
];

// 4. ข้อมูลรายการสินค้าในออเดอร์
const orderItems = [
  {
    id: 9001,
    order_id: 5001,
    product_id: 101, // ซื้ออาหารแมว
    quantity: 1,
    unit_price: 450,
  },
  {
    id: 9002,
    order_id: 5001,
    product_id: 102, // ซื้อไม้ขนไก่
    quantity: 1,
    unit_price: 120,
  },
];

// การแสดงผล (log เช็คการแสดงผล)
console.log("--- ร้าน Happy Paws: จำลองข้อมูลระบบ ---");
console.log("จำนวนสินค้าทั้งหมดในร้าน:", products.length, "รายการ");
console.log("จำนวนคำสั่งซื้อทั้งหมดที่มีในระบบ:", orders.length, "รายการ");
console.log("สถานะคำสั่งซื้อล่าสุด:", orders[0].status);