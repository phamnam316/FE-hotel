export const navList = [
  {
    id: 1,
    path: "/",
    text: "Trang chủ",
  },
  {
    id: 2,
    path: "/about",
    text: "Về chúng tôi",
  },
  {
    id: 3,
    path: "/services",
    text: "Dịch vụ",
  },
  {
    id: 4,
    path: "/rooms",
    text: "Phòng nghỉ",
  },
  {
    id: 5,
    path: "/page",
    text: "Trang",
    subItems: [
      {
        id: 51,
        path: "/booking",
        text: "Đặt phòng",
      },
      {
        id: 52,
        path: "/team",
        text: "Nhân viên",
      },
      {
        id: 53,
        path: "/testimonial",
        text: "Đánh giá",
      },
    ],
  },
  {
    id: 6,
    path: "/contact",
    text: "Liên hệ",
  },
];
export const socialIcons = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
  },
  {
    icon: <i className="fab fa-twitter"></i>,
  },
  {
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
  },
  {
    icon: <i className="fab fa-youtube"></i>,
  },
];

export const LoginData = [
  {
    img: "../assets/img/home.webp",

  }
];

export const carouselData = [
  {
    img: "../assets/img/home1.webp",
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "luxury living",
    btn1: "Our Room",
    btn2: "Book Room",
  },
  {
    img: "../assets/img/carousel-2.jpg",
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "luxury living",
    btn1: "Our Room",
    btn2: "Book Room",
  },
];
export const about = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary mb-2"></i>,
    text: "Phòng nghỉ",
    count: "200",
  },
  {
    icon: <i class="fa fa-users fa-2x text-primary mb-2"></i>,
    text: "Nhân viên",
    count: "170",
  },
  {
    icon: <i class="fa fa-users-cog fa-2x text-primary mb-2"></i>,
    text: "Khách hàng",
    count: "2548",
  },
];

export const services = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary"></i>,
    name: "Phòng nghỉ",
    discription: " ",
  },
  {
    icon: <i class="fa fa-utensils fa-2x text-primary"></i>,
    name: "Nhà hàng",
    discription: " ",
  },
  {
    icon: <i class="fa fa-spa fa-2x text-primary"></i>,
    name: "Spa & Fitness",
    discription: " ",
  },

  {
    icon: <i class="fa fa-swimmer fa-2x text-primary"></i>,
    name: "Thể thao",
    discription: " ",
  },
  {
    icon: <i class="fa fa-glass-cheers fa-2x text-primary"></i>,
    name: "Sự kiện",
    discription: " ",
  },

  {
    icon: <i class="fa fa-dumbbell fa-2x text-primary"></i>,
    name: "GYM & Yoga",
    discription: " ",
  },
];

export const team = [
  {
    image: "../assets/img/team-1.jpg",
    name: "Phạm Nguyên Nam",
    designation: "Designation",
  },
  {
    image: "../assets/img/team-2.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/team-3.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/team-3.jpg",
    name: "Full Name",
    designation: "Designation",
  },
];

export const footerItem = [
  {
    id: 1,
    header: "Company",
    UnitItem: [
      {
        name: "About Us",
      },
      {
        name: "Contact Us",
      },
      {
        name: "Privacy Policy",
      },
      {
        name: "Terms & Condition",
      },
      {
        name: "Support",
      },
    ],
  },
  {
    id: 2,
    header: "Services",
    UnitItem: [
      {
        name: "Nhà hàng",
      },
      {
        name: "Spa ",
      },
      {
        name: "Thể thao",
      },
      {
        name: "Sự kiện",
      },
      {
        name: "GYM & Yoga",
      },
    ],
  },
];

export const footerContact = [
  {
    icon: <i className="fa fa-map-marker-alt me-3"></i>,
    name: "Linh Trung, TP Thủ Đức",
  },
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    name: "+034 345 67890",
  },
  {
    icon: <i className="fa fa-envelope me-3"></i>,
    name: "20520000@gm.uit.edu.vn",
  },
];

export const contact = [
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Booking",
    email: "book@example.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Technical",
    email: "tech@example.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "General",
    email: "info@example.com",
  },
];
export const testimonial = [
  {
    description:
      " ",
    name: "Khách hàng 1",
    profession: "Profession",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-1.jpg",
  },
  {
    description:
      " ",
    name: "Khách hàng 2",
    profession: "Profession",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-2.jpg",
  },
  {
    description:
      " ",
    name: "Khách hàng 3",
    profession: "Profession",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-3.jpg",
  },
];

export const roomItems = [
  {
    img: "../assets/img/room-1.jpg",
    price: "Liên hệ",
    name: "Phòng nghỉ 1",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      " ",
    yellowbtn: "Xem chi tiết",
    darkbtn: "Thuê ngay",
  },

  {
    img: "../assets/img/room-2.jpg",
    price: "Liên hệ",
    name: "Phòng nghỉ 2",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      " ",
    yellowbtn: "Xem chi tiết",
    darkbtn: "Thuê ngay",
  },
  {
    img: "../assets/img/room-3.jpg",
    price: "Liên hệ",
    name: "Phòng nghỉ 3",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      " ",
    yellowbtn: "Xem chi tiết",
    darkbtn: "Thuê ngay",
  },
];

export const facility = [
  {
    icon: <i class="fa fa-bed text-primary me-2"></i>,
    quantity: 3,
    facility: "giường",
  },
  {
    icon: <i class="fa fa-bath text-primary me-2"></i>,
    quantity: 2,
    facility: "bồn tắm",
  },
  {
    icon: <i class="fa fa-wifi text-primary me-2"></i>,
    facility: "Wifi",
  },
];

