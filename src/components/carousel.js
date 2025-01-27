import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner_image_1 from "../assets/banner-image-1.jpg";
import banner_image_2 from "../assets/banner-image-2.jpg";
import banner_image_3 from "../assets/banner-image-3.jpg";
import banner_image_4 from "../assets/banner-image-4.jpg";
import banner_image_5 from "../assets/banner-image-5.jpg";
import banner_image_6 from "../assets/banner-image-6.jpg";
import "../App.css";

export default function Carousel() {
  const bannerData = [
    {
      image: banner_image_1,
      title: "Soft leather jackets",
      description:
        "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    },
    {
      image: banner_image_2,
      title: "Soft leather jackets",
      description:
        "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    },
    {
      image: banner_image_3,
      title: "Soft leather jackets",
      description:
        "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    },
    {
      image: banner_image_4,
      title: "Out crop sweater",
      description:
        "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    },
    {
      image: banner_image_5,
      title: "Soft leather jackets",
      description:
        "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    },
    {
      image: banner_image_6,
      title: "Soft leather jackets",
      description:
        "Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="row-heading">
          <div className="col-md-12">
            <h1>LARKSPER</h1>
          </div>
          <div className="col-md-6 box-heading-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              voluptas ut dolorum consequuntur, adipisci repellat! Eveniet
              commodi voluptatem voluptate, eum minima, in suscipit explicabo
              voluptatibus harum, quibusdam ex repellat eaque!
            </p>
          </div>
          <div className="sm:flex banner">
            <Swiper
              autoplay={{
                delay: 2100,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: false,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {bannerData.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={item.image}
                    className="banner-image"
                    alt={`banner-image-${index}`}
                  />
                  <h4>{item.title}</h4>
                  <p className="w-80 ">{item.description}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
