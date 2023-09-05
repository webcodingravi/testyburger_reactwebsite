import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";



// Mock Data Cards
const mockData = [
    {
      image: Pizza,
      title: "Original",
      paragraph: `typically refers to dishes or cuisines that are unique, innovative, or distinct in some way. It may refer to food creations that haven't been seen before or dishes that put a new twist on traditional recipes`,
    },
    {
      image: Salad,
      title: "Qualty Foods",
      paragraph: `"Quality foods" refer to food products that are of high quality in terms of taste, nutritional value, freshness, and safety.Quality foods are typically associated with superior ingredients, careful preparation`,
    },
    {
      image: Delivery,
      title: "Fastest Delivery",
      paragraph: `When it comes to fast delivery, several factors come into play, and the speed of delivery can vary depending on the specific service, location, and circumstances. Here are a few ways to ensure fast delivery`,
    },
    // Add more mock data objects as needed
  ];
  

function Section2() {
  return (
    <>
     <section className="about_section">
        <Container>
           <Row>
            <Col lg={{span:8, offset:2}} className="text-center">
                <h3>The burger tastes better when you eat it with your family</h3>
                <p>Absolutely, there's something special about sharing a meal, especially a delicious burger, with your family. Here are a few reasons why a burger can taste even better when enjoyed together</p>

                <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
                </Link>
               
            </Col>

           </Row>

        </Container>

        </section>

        <section className="about_wrapper">
            <Container>
              <Row className="justify-content-md-center">
               {mockData.map((cardData, index) => (
                 <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                    <div className="about_box text-center">
                        <div className="about_icon">
                            <img src={cardData.image} className="img-fluid" alt="icon" />
                        </div>
                        <h4>{cardData.title}</h4>
                        <p>{cardData.paragraph}</p>
                    </div>
                 </Col>
               ))}
              </Row>

            </Container>

        </section>

        
    
    </>
    
    
  )
}

export default Section2;
