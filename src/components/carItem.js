import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './project.css'

export class CarItem extends React.Component {

    constructor() {
        super();

        this.DeleteCar = this.DeleteCar.bind(this);
    }
    // delete car method using axios
    // using arrow function
    DeleteCar(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.car._id);

        axios.delete("http://localhost:4000/api/cars/" + this.props.car._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch();
    }

    render() {
        return (
            // bootstrap card component made to display the data from the database
            // ID added to the div to edit in my CSS file
            <div>
                <Card id="card">
                    <Card.Header><h4>{this.props.car.name}</h4></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>{this.props.car.carType}</p>
                            <p>{this.props.car.reg}</p>
                            <img src={this.props.car.picture} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.car.date}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/" + this.props.car._id} className="btn btn-primary" width="20px">Change Details</Link>
                    <br></br>
                    <Button onClick={this.DeleteCar}>Delete Booking</Button>
                    <br></br>
                </Card>
                <br></br>
            </div>
        );
    }
}