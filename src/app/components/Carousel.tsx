import React from 'react'
export const Carousel = () => {
  return (
    <div>
        <div className="carousel w-4/6">
    <div id="slide1" className="carousel-item relative w-full">
      <img src="/akash-0.jpg" className="w-full " />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide6" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
      <img src="/akash-1.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    {/* <div id="slide3" className="carousel-item relative w-full">
      <img src="/akash-2.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div>  */}
    {/* <div id="slide4" className="carousel-item relative w-full">
      <img src="/akash-3.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide5" className="btn btn-circle">❯</a>
      </div>
    </div> */}
    <div id="slide5" className="carousel-item relative w-full">
      <img src="/akash-4.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide6" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide6" className="carousel-item relative w-full">
      <img src="/akash-5.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide5" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div></div>
  )
}
