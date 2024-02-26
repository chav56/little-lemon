import Carousel from './TestimonialCarousel'
import TestimonialCard from './TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard name="Michelle Tai" description="Little Lemon is my new favorite spot for Mediterranean food!"/>
                <TestimonialCard name="Chang Hu" description="I took my wife here for our wedding anniversary and she loved it!"/>
                <TestimonialCard name="Jess Mattis" description="The ambiance is amazing! I definitely will be back!"/>
                <TestimonialCard name="Dan Warton" description="The location is great! The staff is very welcoming and the food
                tastes incredible. Five stars!!"/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}