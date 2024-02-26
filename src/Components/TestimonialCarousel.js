import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <TestimonialCard name="Michelle Tai" description="Little Lemon is my new favorite spot for Mediterranean food!"/>
            <TestimonialCard name="Chang Hu" description="I took my wife here for our wedding anniversary and she loved it!"/>
            <TestimonialCard name="Jess Mattis" description="The ambiance is amazing! I definitely will be back!"/>
            <TestimonialCard name="Dan Warton" description="The location is great! The staff is very welcoming and the food tastes
            incredible. Five stars!!"/>
             </Carousel>
    )
}