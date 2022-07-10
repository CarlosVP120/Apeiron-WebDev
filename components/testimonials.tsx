import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimonials: React.FC = () => (
   <Carousel className="bg-black text-white py-10 lg:py-20 lg:pb-0">
    <CarouselItem index={0}>
        <Review by="David Ogilvy">
            The best ideas come as jokes. Make your thoughts as funny as you can.
        </Review>
    </CarouselItem>
    <CarouselItem index={1}>
        <Review by="Frank Chimero">
            People ignore the design that ignores people.
        </Review>
    </CarouselItem>
    <CarouselItem index={2}>
        <Review by="Andy Warhol">
            The idea is not to live forever, it is to create something that does.
        </Review>
    </CarouselItem>
    <CarouselItem index={3}>
        <Review by="Douglas Adams">
            Think more, design less.
        </Review>
    </CarouselItem>
    <CarouselItem index={4}>
        <Review by="Alina Wheeler">
            Design is intelligence made visible.
        </Review>
    </CarouselItem>
    <CarouselItem index={5}>
        <Review by="Massimo Vignelli">
        If you can design one thing, then you can design everything; if you do it right it will last forever.
        </Review>
    </CarouselItem>
   </Carousel>
)

export default Testimonials