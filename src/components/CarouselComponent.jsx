// CarouselComponent.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import maxixe0 from '../Assets/maxixe0.jpeg';
import maxixe1 from '../Assets/maxixe1.jpeg';
import maxixe2 from '../Assets/maxixe2.jpeg';
import maxixe3 from '../Assets/maxixe3.jpeg';
import maxixe4 from '../Assets/maxixe4.jpeg';

function CarouselComponent() {
    return (
        <Carousel>
           <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={maxixe0}
                                    alt="First slide"
                                    style={{ objectFit: 'cover', height: '500px', width: '700px' }} /* Adjust the height as needed */
                                />
                                <Carousel.Caption>
                                    <h3>maxixemagic</h3>
                                    <p>2023 Shoot</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={maxixe1}
                                    alt="First slide"
                                    style={{ objectFit: 'cover', height: '500px', width: '700px'  }} /* Adjust the height as needed */
                                />
                                <Carousel.Caption>
                                <h3>maxixemagic</h3>
                                    <p>2023 Shoot</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={maxixe2}
                                    alt="First slide"
                                    style={{ objectFit: 'cover', height: '500px' , width: '700px' }} /* Adjust the height as needed */
                                />
                                <Carousel.Caption>
                                <h3>maxixemagic</h3>
                                    <p>2023 Shoot</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={maxixe3}
                                    alt="First slide"
                                    style={{ objectFit: 'cover', height: '500px', width: '700px' }} /* Adjust the height as needed */
                                />
                                <Carousel.Caption>
                                 <h3>maxixemagic</h3>
                                    <p>2023 Shoot</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={maxixe4}
                                    alt="First slide"
                                    style={{ objectFit: 'cover', height: '500px', width: '700px' }} /* Adjust the height as needed */
                                />
                                <Carousel.Caption>
                                <h3>maxixemagic</h3>
                                    <p>2023 Shoot</p>
                                </Carousel.Caption>
                            </Carousel.Item> 
            {/* Add more carousel items as needed */}
        </Carousel>
    );
}

export default CarouselComponent;
