import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


export class Content extends React.Component {


    render(){
        return(
            
          // Added a react bootstrap carousel to the homepage of my react app adding ectra features
            <div>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s3-eu-west-1.amazonaws.com/carsireland.ie.review/review/wp-content/uploads/2020/03/18152205/Lexus-Ct200h.jpg"
      alt="Car Service" width="400" height="500"
    />
    <Carousel.Caption>
      <h1>Car Services</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.rasset.ie/0007cb0b-500.jpg"
      alt="Third slide" width="400" height="500"
    />

    <Carousel.Caption>
      <h1>Book an Appoinment to get your Car Serviced</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/rrswbphev006.jpg?itok=9I7wPblq"
      alt="Third slide" width="400" height="500"
    />

    <Carousel.Caption>
      <h1>Have your car Checked and cleaned!!</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        );
    }
}