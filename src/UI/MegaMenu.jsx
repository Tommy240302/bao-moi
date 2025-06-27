// MegaMenu.jsx
import React from "react";
import './MegaMenu.css';

const MegaMenu = ({ show }) => {
  return (
    <div className={`mega-menu ${show ? "show" : ""}`}>
      <div className="menu-column">
        <h3>BÓNG ĐÁ</h3>
        <p>Ronaldo</p>
        <p>Đội tuyển Việt Nam</p>

      </div>
      <div className="menu-column">
        <h3>THẾ GIỚI</h3>
        <p>Chiến sự Nga-Ukraina</p>
        <p>Chiến sự Iran-Irael</p>
      </div>
      <div className="menu-column">
        <h3>XÃ HỘI</h3>
        <p>Thời sự</p>
        <p>Giao thông</p>
        <p>Môi trường - Khí hậu</p>
      </div>
      <div className="menu-column">
        <h3>VĂN HÓA</h3>
        <p>Nghệ thuật</p>
        <p>Ẩm thực</p>
        <p>Du lịch</p>
      </div>
      <div className="menu-column">
        <h3>KINH TẾ</h3>
        <p>Lao động - Việc làm</p>
        <p>Tài chính</p>
        <p>Chứng khoán</p>
        <p>Kinh doanh</p>
      </div>
      {/* Thêm các cột khác giống vậy */}
    </div>
  );
};

export default MegaMenu;
