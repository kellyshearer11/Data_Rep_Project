import React from 'react';
import axios from 'axios';
import './project.css'

export class Contact extends React.Component {

    constructor() {
        super();
    // Booking form, user inputs data and its submitted and read to the data base by changing state
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCarType = this.onChangeCarType.bind(this);
        this.onChangeReg = this.onChangeReg.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangePicture = this.onChangePicture.bind(this);


        this.state = {
            Name: '',
            CarType: '',
            Reg: '',
            Date: '',
            Picture: '',
        }
    }
    // methods used to enter values
    onChangeName(e) {
        this.setState({
            Name: e.target.value
        })
    }

    onChangeCarType(e) {
        this.setState({
            CarType: e.target.value
        })
    }

    onChangeReg(e) {
        this.setState({
            Reg: e.target.value
        })
    }

    onChangeDate(e) {
        this.setState({
            Date: e.target.value
        })
    }

    onChangePicture(e) {
        this.setState({
            Picture: e.target.value
        })
    }
    // alert that is activated once user presses submit and data is read to the database
    onSubmit(e) {
        e.preventDefault();
        alert("Car: " + this.state.Name + " " + this.state.CarType + " "
            + this.state.Reg + " " + this.state.Date + " " + this.state.Picture)

        const newCar = {
            name: this.state.Name,
            carType: this.state.CarType,
            reg: this.state.Reg,
            date: this.state.Date,
            picture: this.state.Picture
        }
        axios.post('http://localhost:4000/api/cars', newCar)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className='App'>
                <h1> Please enter your details here to book an Appointment</h1>
                <br></br>
                <form onSubmit={this.onSubmit} align="center" padding="100px">
                    <div className="form-group">
                        <h3>Add Car Owner Name:  </h3>
                        <input type='text'
                            className='form-control'
                            value={this.state.Name}
                            onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <h3>Add Car Brand: </h3>
                        <input type='text'
                            className='form-control'
                            value={this.state.CarType}
                            onChange={this.onChangeCarType}></input>
                    </div>
                    <div className="form-group">
                        <h3>Add Car Reg: </h3>
                        <input type='text'
                            className='form-control'
                            value={this.state.Reg}
                            onChange={this.onChangeReg}></input>
                    </div>
                    <div className="form-group">
                        <h3>Add Appointment Date: </h3>
                        <input type='text'
                            className='form-control'
                            value={this.state.Date}
                            onChange={this.onChangeDate}></input>
                    </div>

                    <div className="form-group">
                        <h3>Add Picture of Car: </h3>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Picture}
                            onChange={this.onChangePicture}></textarea>
                    </div>

                    <div className='form-group'>
                        <input type='submit'
                            value='Add Car'
                            className='btn btn-primary'></input>
                    </div>
                    <br></br>
                </form>
            </div>
        );
    }
}