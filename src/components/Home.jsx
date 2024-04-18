import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap'; // Import Carousel, Container, Row, and Col from react-bootstrap
import backgroundImage from '../Assets/background.png'; // Import background image
import maxixe0 from '../Assets/maxixe0.jpeg'
import maxixe1 from '../Assets/maxixe1.jpeg'
import maxixe2 from '../Assets/maxixe2.jpeg'
import maxixe3 from '../Assets/maxixe3.jpeg'
import maxixe4 from '../Assets/maxixe4.jpeg'

function Home() {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <Container>
                <Row>
                    <Col md={3}></Col> {/* Empty column on the left */}
                    <Col md={6}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={maxixe0}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={maxixe1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={maxixe2}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={maxixe3}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={maxixe4}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={3}></Col> {/* Empty column on the right */}
                </Row>
            </Container>
        </div>
    );
}

export default Home;
