import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Categories() {
  const categories = [
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg",
      title: "Elegant Fall Collection",
      price: "499",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg",
      title: "Stylish Winter Wear",
      price: "499",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
      title: "Timeless Tees",
      price: "499",
    },
    {
      src: "https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg",
      title: "Modern Casuals",
      price: "499",
    },
    {
      src: "https://manubhai.in/SocialMedia/post_artworks/DGBD05724.jpg",
      title: "Floral Gold Necklace",
      price: "499",
    },
    {
      src: "https://res.cloudinary.com/hamstech/images/f_auto,q_auto/v1628751454/Hamstech%20App/Must-Have-Trendy-Jewellery-Designs/Must-Have-Trendy-Jewellery-Designs.jpg?_i=AA",
      title: "Trendy Jewellery Designs",
      price: "499",
    },
  ];

  return (
    <div className="container md:max-w-6xl md:mb-10 px-0">
      <div className="flex justify-between items-center mb-6 px-4">
        <h2 className="text-xl font-semibold uppercase text-gray-800">
          Most Popular Categories
        </h2>
        <p className="underline font-medium cursor-pointer hover:underline">
          VIEW ALL PRODUCTS
        </p>
      </div>

      {/* Swiper Section */}
      <Swiper
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={5}
        spaceBetween={20}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        // breakpoints={{
        //   640: { slidesPerView: 1, spaceBetween: 10 },
        //   768: { slidesPerView: 2, spaceBetween: 15 },
        //   1024: { slidesPerView: 3, spaceBetween: 20 },
        // }}
        // className="px-4"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="flex-col">
              <img
                src={category.src}
                alt={category.title}
                className="w-64 h-80 object-cover rounded-md"
              />
              <p className="font-dot font-medium text-lg text-gray-700 mt-4">
                {category.title}
              </p>
              <p className="font-dot font-medium text-lg text-gray-700 mt-1">
                {category.price}.00 ₹
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
