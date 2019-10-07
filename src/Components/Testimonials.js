import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Testimonials extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="quote-icon"
                        src="quote.svg"
                        alt="Quote Icon"
                    />
                    <Carousel.Caption>
                        <h3>The Wilderness Podcast has been my go to podcast and I couldn't be prouder.</h3>
                        <p>Magpies /<span> This person</span></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="quote-icon"
                        src="quote.svg"
                        alt="Quote Icon"
                    />
                    <Carousel.Caption>
                        <h3>my favourite part is when dillon takes a deep dive into the rune scaping and how you can bake a pie but not boil a potato</h3>
                        <p>Toots /<span> This person</span></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Testimonials