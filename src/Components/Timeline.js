import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Timeline extends React.Component {
    render() {
        return (
            <div className="timeline-wrapper">
                <div className="top">
                    <h4>since 1992</h4>
                    <h3><span>making</span> history</h3>
                </div>
                <Carousel className="middle col-7">
                    <Carousel.Item className="slide">
                        <div className="wrapper">
                            <span className="item">
                                <h3>oct 2019</h3>
                                <h4>Establishment</h4>
                                <p>Suspe ndisse suscipit sagittis leo sit met condimentum essum dolor sit amet, consecte.</p>
                            </span>
                            <span className="item mid">
                                <h3>sept 2019</h3>
                                <h4>Establishment</h4>
                                <p>Suspe ndisse suscipit sagittis leo sit met condimentum essum dolor sit amet, consecte.</p>
                            </span>
                            <span className="item">
                                <h3>oct 2019</h3>
                                <h4>Establishment</h4>
                                <p>Suspe ndisse suscipit sagittis leo sit met condimentum essum dolor sit amet, consecte.</p>
                            </span>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="slide">
                        <div className="wrapper">
                            <span className="item">
                                <h3>nov 2019</h3>
                                <h4>Establishment</h4>
                                <p>Suspe ndisse suscipit sagittis leo sit met condimentum essum dolor sit amet, consecte.</p>
                            </span>
                            <span className="item mid">
                                <h3>dec 2019</h3>
                                <h4>Establishment</h4>
                                <p>Suspe ndisse suscipit sagittis leo sit met condimentum essum dolor sit amet, consecte.</p>
                            </span>
                            <span className="item">
                                <h3>jan 2020</h3>
                                <h4>Establishment</h4>
                                <p>Suspe ndisse suscipit sagittis leo sit met condimentum essum dolor sit amet, consecte.</p>
                            </span>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Timeline