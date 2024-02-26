import Star from '../assets/stars.png';
export default function TestimonialCard(props) {
    return (
        <article className="testimonial-card">
            <img src={Star} alt="Rate icons created by Alfredo Hernandez - Flaticon"></img>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
}