import React from 'react';
import Card from 'react-bootstrap/Card'

export class CarItem extends React.Component {

    render() {
        return (
            // bootstrap card component made to display the data from the database
            <div>
                <Card>
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
                </Card>

            </div>
        );
    }
}