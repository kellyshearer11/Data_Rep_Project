import React from 'react';
import { Car } from './car';
import axios from 'axios';
import './project.css'

export class Booking extends React.Component {

    constructor() {
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }
    state = {

        cars: [

        ]
    };
    // link to my api for my cars data
    componentDidMount() {
        axios.get('http://localhost:4000/api/cars')
            .then(response => {
                this.setState({ cars: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    // Reload data method which reads data after car has been deleted
    ReloadData() {
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
    // Added the reload data function to avoid refreshing the page after deletion
    render() {

        return (
            <div id="create">
                <h1>Cars Booked In:</h1>
                <Car cars={this.state.cars} ReloadData={this.ReloadData}></Car>
            </div>
        );
    }
}