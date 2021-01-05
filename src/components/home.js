import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './project.css';
import Jumbotron from 'react-bootstrap/Jumbotron'

export class Home extends React.Component {


  render() {
    return (

      // Added a react bootstrap carousel to the homepage of my react app adding extra features
      // Also added a boostrap Jumbotron 
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3-eu-west-1.amazonaws.com/carsireland.ie.review/review/wp-content/uploads/2020/03/18152205/Lexus-Ct200h.jpg"
              alt="Car Service" width="80px" height="550px"
            />
            <Carousel.Caption>
              <h1>CAR SERVICES</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg"
              alt="Third slide" width="80px" height="550px"
            />

            <Carousel.Caption>
              <h1>QUICK AND EASY BOOKING SYSTEM</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/rrswbphev006.jpg?itok=9I7wPblq"
              alt="Third slide" width="80px" height="550px"
            />

            <Carousel.Caption>
              <h1>HAVE YOUR CAR CLEANED AND SERVICED</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <br>
        </br>
        <div id="jumbotron">
          <h2>Car Servicing business</h2>
          <p>Book your car in to be serviced, checked and cleaned through our easy online booking system </p>
          <img src="https://i.pinimg.com/originals/6a/fb/08/6afb08e233f126c3dabff441c31e06ab.png" alt="Car"
          width="200px"/>
        </div>
      </div>


    );
  }
}