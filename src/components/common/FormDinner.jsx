import React, { useState } from 'react';
import Image1 from '../../images/dinner6.jpg';
const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    numberOfGuests: '',
    phoneNumber: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic khi submit form, ví dụ: gửi dữ liệu đến API
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mt-5" >
<form onSubmit={handleSubmit} 
    className="container mt-5"
    
    >
      <div className="form-group">
        <label htmlFor="name">Tên:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Ngày:</label>
        <input
          type="date"
          className="form-control"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="time">Giờ:</label>
        <input
          type="time"
          className="form-control"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="numberOfGuests">Số lượng khách:</label>
        <input
          type="number"
          className="form-control"
          id="numberOfGuests"
          name="numberOfGuests"
          value={formData.numberOfGuests}
          onChange={handleChange}
          required
          min="1"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Số điện thoại:</label>
        <input
          type="tel"
          className="form-control"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
        />
      </div>
      <div className="form-group">
        <label htmlFor="notes">Chú thích:</label>
        <textarea
          className="form-control"
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-success mt-5">Đặt chỗ ngay</button>
    </form>
    </div>
    
  );
};

export default ReservationForm;
