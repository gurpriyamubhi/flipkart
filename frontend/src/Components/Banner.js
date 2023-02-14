import React from 'react'
import '../App.css'
import { Carousel } from 'react-bootstrap';
import Products from './Products';

const Bannerimgs = [
    {src:'./Images/FlipkartBanner1.jpg'},
    {src:'./Images/FlipkartBanner2.jpg'},
    {src:'./Images/FlipkartBanner3.jpg'},
    {src:'./Images/FlipkartBanner4.jpg'},
    {src:'./Images/FlipkartBanner5.jpg'},
];


function Banner() {

    return(
        <div className='BannerClass'>
            <Carousel variant='dark' slide={true}>
                {Bannerimgs.map((image)=>{
                    return(
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block w-100 bannerimage"
                        src={image.src}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        {/* <h3 style={{fontSize:"2.5vw"}}>Shop Anything on Amazon</h3> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    );
                })}
            </Carousel>

            <Products></Products>
        </div>
    )
}

export default Banner;