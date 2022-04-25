import React from 'react';
import { Carousel, Card } from 'react-bootstrap';
import image1 from "../../assets/1.jpg"
import image2 from "../../assets/2.jpg"
import image3 from "../../assets/3.jpg"
import image4 from "../../assets/4.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
const Karosel = () => {
    return (
        
        <Carousel style={{
            marginBottom:"7%"
        }}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="First slide"


                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image4}
                    alt="Third slide"
                />

                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    );
};

export default Karosel;