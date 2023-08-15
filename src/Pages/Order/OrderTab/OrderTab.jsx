import FoodCard from "../../../Components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './OrderTab.css'

const OrderTab = ({ items }) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">'+"Page " +" " + (index + 1) + '</span>';
        },
    };

    return (
        <div >

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper mb-14"
            >
                <SwiperSlide>

                    <div className="grid md:grid-cols-3 gap-10 my-10">
                        {
                            items.map(item => <FoodCard
                                key={item._id}
                                item={item}

                            ></FoodCard>)
                        }
                    </div>
                </SwiperSlide>
                

            </Swiper>



        </div>
    );
};

export default OrderTab;