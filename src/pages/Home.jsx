// Home.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarouselComponent from '/Users/arie/maxixe-studios/src/components/CarouselComponent.jsx'; // Import the carousel component

function Home() {
    return (
        <div style={{ backgroundColor: '#FAF9F8', paddingTop: '200px', paddingBottom: '200px' }}> {/* Background color under the header */}
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
    );
}

export default Home;
