'use client'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

function Banner() {
    return (
        <div>
            <div className='relative'>
                <div className='absolute w-full h-80 bg-gradient-to-t from-gray-50 to-transparent bottom-0' />
                <Carousel
                    autoPlay
                    infiniteLoop
                    showArrows
                    showStatus={false}
                    showThumbs={false}
                    interval={5000}
                >

                    <div>
                        <img
                            loading='lazy'
                            src='https://m.media-amazon.com/images/I/71cWGXPQn0L._SX3000_.jpg'
                        />
                    </div>

                    <div>
                        <img
                            loading='lazy'
                            src='https://m.media-amazon.com/images/I/61SdOa05zoL._SX3000_.jpg'
                        />
                    </div>

                    <div>
                        <img
                            loading='lazy'
                            src='https://m.media-amazon.com/images/I/61GxblARRmL._SX3000_.jpg'
                        />
                    </div>

                </Carousel>

            </div>
        </div>
    )
}

export default Banner