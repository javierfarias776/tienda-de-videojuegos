import React from "react";

const Inicio = () => {
  return (
    <div>

    <div id="carouselExampleDark" className="carousel carousel-light slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
          ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://i1.wp.com/todasgamers.com/wp-content/uploads/2016/08/uncharted4.png?fit=1200%2C400"
            className="d-block w-100"
            alt="Uncharted" 
            />
          <div className="carousel-caption d-none d-md-block">
            <h5>Uncharted</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://pbs.twimg.com/media/EbtVFoAWkAMLbFY.jpg"
            className="d-block w-100 h-50"
            alt="..."
            />
          <div className="carousel-caption d-none d-md-block">
            <h5>The last Of Us PARTE 2</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://swall.teahub.io/photos/small/151-1510755_marvel-spider-man-ps4.png"
            className="d-block w-100"
            alt="..."
            />
          <div className="carousel-caption d-none d-md-block">
            <h5>Spiderman</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
        >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    
      </div>
  );
};

export default Inicio;
