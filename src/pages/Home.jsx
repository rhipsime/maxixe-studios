// Home.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselComponent from '/Users/arie/maxixe-studios/src/components/CarouselComponent.jsx'; // Import the carousel component
import backgroundImageAbove from '/Users/arie/maxixe-studios/src/Assets/background-image-above-caraousel.png'; // Import the background image above the carousel
import backgroundImageBelow from '/Users/arie/maxixe-studios/src/Assets/background-image-under-caraousel.png'; // Import the background image below the carousel


function Home() {
    return (
        <div>
            {/* Background image above the carousel */}
            <div style={{ 
                backgroundImage: `url(${backgroundImageAbove})`,
                backgroundSize: 'contain',
                paddingTop: '200px', 
                paddingBottom: '100px',
                width: '100%' // Ensure the div stretches out across the webpage
            }}>
                <Container>
                    <Row>
                        <Col md={1}></Col> {/* Empty column on the left */}
                        <Col md={10}>
                            <CarouselComponent /> {/* Use the carousel component */}
                        </Col>
                        <Col md={1}></Col> {/* Empty column on the right */}
                    </Row>
                </Container>
            </div>
            {/* Background image below the carousel */}
            <div style={{ 
                backgroundImage: `url(${backgroundImageBelow})`,
                backgroundSize: 'cover', // Change to 'cover'
                backgroundRepeat: 'no-repeat',
                paddingTop: '200px', 
                paddingBottom: '200px',
                width: '100%' // Ensure the div stretches out across the webpage
            }}>
                {/* Content below the carousel */}
            </div>
        </div>
    );
}

export default Home;
        
 