import React from 'react';
import { Car } from './car';
import axios from 'axios';

export class Read extends React.Component {
    
    state = {

        car: [
            {
                "Name": "Kelly Shearer",
                "CarType": "Toyota",
                "Reg": "tt4154756",
                "Date": "28-01-21",
                "Picture": "https://t1-cms-1.images.toyota-europe.com/toyotaone/ieen/c-hr%201600x900_tcm-3044-1779074.jpg"
                },

                {
                    "Name": "Eimear Broderick",
                    "CarType": "Ford Focus",
                    "Reg": "tt4154756",
                    "Date": "29-01-21",
                    "Picture": "https://www.gpas-cache.ford.com/guid/e56687dd-4a61-3d36-af0f-e664e33bf02c.png"
                    },

                    {
                        "Name": "Sarah Fahey",
                        "CarType": "Mini",
                        "Reg": "tt4154756",
                        "Date": "29-01-21",
                        "Picture": "https://upload.wikimedia.org/wikipedia/commons/7/7e/2014_MINI_Cooper_Hardtop_--_NHTSA_test_8883_-_front.jpg"
                        }
        ]
    };

    render(){

        return(
            <div>
              <h1>Cars Booked In:</h1>
             <Car car={this.state.car}></Car>
            </div>
        );
    }
}