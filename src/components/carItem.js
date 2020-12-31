import React from 'react';
import Card from 'react-bootstrap/Card'

export class CarItem extends React.Component {

    render() {
        return (
            <div>

                <Card>
                    <Card.Header><h4>{this.props.car.Name}</h4></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>{this.props.car.CarType}</p>
                            <p>{this.props.car.Reg}</p>
                            <img src={this.props.car.Picture} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.car.Date}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}