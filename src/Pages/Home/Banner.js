import React from 'react';
import slider1 from '../../assets/Slider/banner.jpg'
import slider2 from '../../assets/Slider/banner2.jpg'
import slider3 from '../../assets/Slider/slider3.jpg'
const Banner = () => {
    return (
        <div>
            <div class="carousel w-full h-96" >
                <div id="slide1" class="carousel-item relative w-full ">
                    <img src={slider1} class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-sm btn-circle btn-primary bg-primary">❮</a>
                        <a href="#slide2" class="btn btn-sm btn-circle btn-primary bg-primary">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={slider2} class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-sm btn-circle btn-primary bg-primary">❮</a>
                        <a href="#slide3" class="btn btn-sm btn-circle btn-primary bg-primary">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;