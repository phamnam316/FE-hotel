import React from "react";
import ImageSlider from "../components/common/ImageSlider";
import Heading from "../components/common/Heading";
import InforRoom from "../components/common/InforRoom";
const RoomBooking = () => {
  const slides = [
    { url: "https://static03-cdn.oneinventory.com/images/2024/01/55600a8f90d5432599f5c54b60d2f880.jpg", title: "beach" },
    { url: "https://static03-cdn.oneinventory.com/images/2024/01/d468348b8f2447259f9b07bbf14848c3.jpg", title: "boat" },
    { url: "https://static03-cdn.oneinventory.com/images/2024/01/f358061ba7794e6e9b59775f7471104f.jpg", title: "forest" },
    { url: "https://static03-cdn.oneinventory.com/images/2024/01/55600a8f90d5432599f5c54b60d2f880.jpg", title: "city" },
    { url: "https://static03-cdn.oneinventory.com/images/2024/01/f358061ba7794e6e9b59775f7471104f.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "900px",
    height: "400px",
    margin: "0 auto",
  };
  return (
    <>
    <Heading heading="Booking" title="Booking" subtitle="Booking" />
    <div className="container">
      <div style={containerStyles}>
      <h1>InforRoom</h1>
        <ImageSlider slides={slides} />
        <InforRoom />
      </div>
    </div></>

  );
};

export default RoomBooking;