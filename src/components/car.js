import React from 'react';
import { CarItem } from './carItem';

export class Car extends React.Component {

    render(){
        return this.props.car.map((car) =>{
            return <CarItem car={car}></CarItem>
        });
    }
}