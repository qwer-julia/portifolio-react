import { Swiper, SwiperProps } from "swiper/react";
import 'swiper/css'
import React, { ReactNode } from "react";

interface SliderProps {
    settings: SwiperProps,
    children: ReactNode;
}

function Slider({ settings, children }: SliderProps) {
    return (
        <Swiper {...settings}>
            {children}
        </Swiper>
    )

}

export default Slider