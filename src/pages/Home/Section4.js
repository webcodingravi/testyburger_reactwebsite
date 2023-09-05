import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PrmotionImage from '../../assets/promotion/pro.png';

function Section4() {
  return (
   <>
   <section className="promation_section">
    <Container>
        <Row>
            <Col lg={6} className="text-center mb-5 mb-lg-0">
                <img src={PrmotionImage} className="img-fluid" alt="promtionImage" />
            </Col>
            <Col lg={6} className="px-5 align-items-center">
                <h2>Nothing brings people together like a good burger</h2>
                <p>Food, and in particular, a good burger, has a way of bringing people together. Burgers are a popular and universally enjoyed food item, and they often serve as a centerpiece for gatherings and social events. </p>
                <ul>
                    <li>
                        <p>The versatility of burgers also makes them appealing to a wide range of tastes.</p>
                    </li>

                    <li>
                        <p>condiments, and types of meat or meat alternatives, catering to individual preferences. </p>
                    </li>

                    <li>
                        <p>This flexibility makes it easy to accommodate a diverse group of people with different tastes and dietary restrictions</p>
                    </li>
                </ul>
            </Col>
        </Row>
    </Container>
   </section>


   {/*BG Parllax Scroll */}

   <section className="bg_parallax_scroll"></section>
   
   </>
  )
}

export default Section4;
