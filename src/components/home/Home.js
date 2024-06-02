import React, { useEffect } from 'react';
import Carousel from "./Carousel";
import Book from "./Book";
import About from "./About";
import Services from "./Service";
import Rooms from "./Rooms";
import Sliders from "./Slider";
import Teams from "./Team";

export default function Home() {
  useEffect(() => {
    // Kiểm tra xem có thông báo cần hiển thị không
    const showSuccessAlert = localStorage.getItem('showSuccessAlert');
    if (showSuccessAlert === 'true') {
        // Nếu có, hiển thị thông báo và xóa trạng thái từ localStorage
        alert("Đăng nhập thành công!");
        localStorage.removeItem('showSuccessAlert');
    }
}, []);
  return (
    <>
      <Carousel />
      <Book />
      <About />
      <Rooms />
      <Services />
      <Sliders />
      <Teams />
    </>
  );
}
