import React from 'react';
import { CarItem } from './carItem';

export class Car extends React.Component {

    render(){
        // added the relaod data function 
        return this.props.cars.map((car) =>{
            return <CarItem car={car} ReloadData={this.props.ReloadData}></CarItem>
        });
    }
}