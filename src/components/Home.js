import React from 'react'
import { Carousel } from 'react-bootstrap'
import './home.scss'

export default function Home() {
    return (
        <div>
            <Carousel variant="dark" className='Carousel'>
                <Carousel.Item className='imgSize'>
                    <div>
                        <img
                            className="d-block w-100"
                            src="/bikiniCies1.jpg"
                            alt="First slide"
                        />
                    </div>

                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='imgSize'>
                    <img
                        className="d-block w-100"
                        src="/enteriza1.jpeg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='imgSize'>
                    <img
                        className="d-block w-100"
                        src="/sumerSaleLove.jpeg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
