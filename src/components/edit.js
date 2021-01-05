import React from 'react';
import axios from 'axios';
import './project.css'

export class Edit extends React.Component {

    constructor() {
        super();

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
    // edit component added to change a field of a car entered on the server
    componentDidMount() {
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/cars/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    Name: response.data.name,
                    CarType: response.data.carType,
                    Reg: response.data.reg,
                    Date: response.data.date,
                    Picture: response.data.picture
                })

            })

            .catch((error) => {
                console.log(error);
            })
    }
    // Here are all the methods used to input data into the form
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

    onSubmit(e) {
        e.preventDefault();
        alert("Car: " + this.state.Name + " " + this.state.CarType + " "
            + this.state.Reg + " " + this.state.Date + " " + this.state.Picture)

        const newCar = {
            name: this.state.Name,
            carType: this.state.CarType,
            reg: this.state.Reg,
            date: this.state.Date,
            picture: this.state.Picture,
            _id: this.state._id
        }
        // using axios and the put method to update changes to the field 
        axios.put('http://localhost:4000/api/cars/' + this.state._id, newCar)
            .then(res => console.log(res.data));
    }



    render() {
        return (
            <div className='App' id="edit">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <h1> Edit Booking Details </h1>
                        <br></br>
                        <label>Add Car Owner Name:  </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Name}
                            onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Car Brand: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.CarType}
                            onChange={this.onChangeCarType}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Car Reg: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Reg}
                            onChange={this.onChangeReg}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Appointment Date: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Date}
                            onChange={this.onChangeDate}></input>
                    </div>

                    <div className="form-group">
                        <label>Add Picture of Car: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Picture}
                            onChange={this.onChangePicture}></textarea>
                    </div>

                    <div className='form-group'>
                        <input type='submit'
                            value='Edit Car'
                            className='btn btn-primary'></input>
                        <br></br>
                    </div>
                </form>
            </div>
        );
    }
}