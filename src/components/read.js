import React from 'react';
import { Car } from './car';
import axios from 'axios';

export class Read extends React.Component {
    
    state = {

        cars: [
            
        ]
    };
    // link to my api for my json cars
    componentDidMount(){
        axios.get('http://localhost:4000/api/cars')
        .then(response => {
        this.setState({ cars: response.data });
        })
        .catch(function (error) {
        console.log(error);
        });

        }
        // the read component which reads the cars booked in from my database and displays it 
        // to the cars booked in page
    render(){

        return(
            <div>
              <h1>Cars Booked In:</h1>
             <Car cars={this.state.cars}></Car>
            </div>
        );
    }
}