'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from "framer-motion"



const images = [
    '/images/foto1.jpg',
    '/images/foto2.jpg',
    '/images/foto3.jpg',
]

export default function Carousel() {
    return (
        <motion.div initial={{opacity: 0 }} animate={{ opacity: 1}}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {
                    images.map(x=>(
                        <SwiperSlide key={x}>
                            <Image
                                src={x}
                                fill
                                alt="Picture of the author"
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </motion.div>
    )
  }