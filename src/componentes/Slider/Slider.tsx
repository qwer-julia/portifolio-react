import { Swiper, SwiperProps } from "swiper/react";
import 'swiper/css'
import React, { ReactNode } from "react";

interface SliderProps {
    settings: SwiperProps,
    children: ReactNode;
}

function Slider({children }: SliderProps) {
    return (
        <Swiper spaceBetween={50} slidesPerView={1} breakpoints={{1010: {slidesPerView: 3}, 550: {slidesPerView: 2}}}>
            {children}
            
        </Swiper>
    )

} 

export default Slider