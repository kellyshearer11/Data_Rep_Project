import React from 'react';

export class Create extends React.Component {

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
        alert("Car: " + this.state.Name + " " + this.state.CarType + " " + this.state.Reg + " " + this.state.Date + " " + this.state.Picture)
    }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
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
                            value='Add Car'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}