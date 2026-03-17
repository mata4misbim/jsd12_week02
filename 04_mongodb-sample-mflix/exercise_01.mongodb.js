/*
  Exercise 01: Find movies directed by Hal Roach
  
  1. เป้าหมายคือการค้นหาหนังตามรายชื่อผู้กำกับ (directors)
  2. เนื่องจากฟิลด์ directors เก็บข้อมูลเป็น Array ผมจึงเลือกใช้ตัวดำเนินการ $in เพื่อเช็คว่ามีชื่อ "Hal Roach" อยู่ในรายการหรือไม่
  3. กำหนดข้อมูลที่ต้องการแสดง (Projection) ได้แก่ title และ awards.wins
  4. ตั้งค่า _id: 0 เพื่อไม่ให้แสดงค่า Object ID ในผลลัพธ์ ทำให้ข้อมูลดูสะอาดตาขึ้น
*/

            use('sample_mflix');

            db.movies.find(
            { 
                directors: { $in: ["Hal Roach"] } 
            },
            {
                title: 1,
                "awards.wins": 1,
                _id: 0
            }
            );

/*
  Understanding:
  สิ่งที่ได้เรียนรู้จากข้อนี้คือการจัดการกับข้อมูลประเภท Array ใน MongoDB ครับ 
  การใช้ $in ทำให้เราค้นหาค่าที่ต้องการภายในลิสต์ได้ง่ายมาก และผมเข้าใจการใช้ 
  Dot Notation เช่น "awards.wins" เพื่อเจาะเข้าไปดึงข้อมูลที่ซ้อนอยู่ข้างใน Object ครับ
*/