import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


import 'swiper/css';
import 'swiper/css/navigation';

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Testimonials = () => {

    const [review, setReview] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))

    }, [])


    return (
        <div className="my-20 ">
            <SectionTitle
                subHeading={"What Our Clients say"}
                heading={"Testimonials"}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


                <div className=" ">

                    {
                        review.map(r => <SwiperSlide
                            key={r._id}>

                            <div className="w-5/6 mx-auto text-center flex flex-col justify-center items-center gap-2">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={r.rating}
                                    readOnly
                                />
                                <p>{r.details}</p>
                                <h2 className="text-2xl text-yellow-500 uppercase">{r.name}</h2>
                            </div>


                        </SwiperSlide>)
                    }
                </div>

            </Swiper>

        </div>
    );
};

export default Testimonials;