import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import banner1 from "../../images/banner-img/banner-1.jpg";
import banner2 from "../../images/banner-img/banner-2.png";
import banner3 from "../../images/banner-img/banner-3.jpg";
import banner4 from "../../images/banner-img/banner-4.jpg";
import banner5 from "../../images/banner-img/banner-5.jpg";

const Banner = () => {
    return (
        <div className="banner-slider">
             <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Sreemangal Tee State</h3>
                    <p>Lot of heals and tea state with natural scenic view</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Ratargul swamp forest</h3>
                    <p> an attractive tourist destination in bangladesh </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Sundarbans</h3>
                    <p>World's largest mangrove forest</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner4}
                    alt="Fourth slide"
                    />
                    <Carousel.Caption>
                    <h3>Jaflong river</h3>
                    <p>a river with transparent water</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner5}
                    alt="fifth slide"
                    />
                    <Carousel.Caption>
                    <h3>Saint Martin</h3>
                    <p>An attractive remote island from the coast</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
  );
}

 

export default Banner;