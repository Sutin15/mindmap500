500 Mindmap — วิธีติดตั้งเป็นแอปบนมือถือ (PWA) และทำเป็น .APK
=================================================================

ขั้นที่ 1 — เอาขึ้นเว็บฟรีด้วย GitHub Pages (ทำครั้งเดียว ~10 นาที)
  1) github.com → New repository → ตั้งชื่อ เช่น mindmap500 → Public → Create
  2) Add file → Upload files → ลากไฟล์ทั้งหมดในโฟลเดอร์นี้ขึ้นไป
     (index.html, sw.js, manifest.webmanifest, icon-*.png, apple-touch-icon.png, โฟลเดอร์ p/ และ s/)
     * โฟลเดอร์ p/ มี 503 ไฟล์ ถ้าเว็บอัปโหลดทีละมากไม่ได้ ให้แบ่งอัปหลายรอบ หรือใช้ GitHub Desktop
  3) Settings → Pages → Source: Deploy from a branch → main / (root) → Save
  4) รอ 1–2 นาที จะได้ลิงก์ https://<ชื่อผู้ใช้>.github.io/mindmap500/

ขั้นที่ 2 — ติดตั้งเป็นไอคอนบนหน้าจอ
  Android (Chrome): เปิดลิงก์ → เมนู ⋮ → "ติดตั้งแอป" / "เพิ่มลงในหน้าจอหลัก"
  iPhone (Safari):  เปิดลิงก์ → ปุ่มแชร์ → "เพิ่มไปยังหน้าจอโฮม"
  → ได้ไอคอน 500 MINDMAP เปิดเต็มจอเหมือนแอป, เล่มที่เคยเปิดแล้วอ่านออฟไลน์ได้

ขั้นที่ 3 (ถ้าต้องการไฟล์ .APK)
  1) ไปที่ https://www.pwabuilder.com → วางลิงก์จากขั้นที่ 1 → Start
  2) Package For Stores → Android → Generate Package → ดาวน์โหลด .zip
  3) ในไฟล์ zip จะมี .apk → ส่งเข้ามือถือ Android แล้วกดติดตั้ง
     (ต้องอนุญาต "ติดตั้งแอปจากแหล่งที่ไม่รู้จัก")

หมายเหตุ: ไฟล์รูปรวม ~125 MB — ใช้ PWA (ขั้นที่ 2) จะเบากว่า เพราะโหลดเฉพาะเล่มที่เปิดอ่าน
