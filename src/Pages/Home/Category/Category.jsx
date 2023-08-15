import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';




const Category = () => {
    return (
        <div>
            <SectionTitle 
            subHeading={"From 10.00 am to 10.00 pm"}
            heading={"Order Online"}
            ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper my-16 w-5/6 mx-auto"
            >
                <SwiperSlide><img src={slide1} alt="" />
                <h3 className='md:text-4xl uppercase text-center -mt-12'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" /><h3 className='md:text-4xl uppercase text-center -mt-12 text-white'>Pizza</h3></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" /><h3 className='md:text-4xl uppercase text-center -mt-12'>Soups</h3></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" /><h3 className='md:text-4xl uppercase text-center -mt-12'>Desserts</h3></SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" /><h3 className='md:text-4xl uppercase text-center -mt-12'>Salad</h3></SwiperSlide>
                
            </Swiper>

        </div>
    );
};

export default Category;