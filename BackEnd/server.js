const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser=  require('body-parser');
const mongoose = require('mongoose');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// the connection string created from  my mongodb database that stores the data entered in the form
var myConnectionString ='mongodb+srv://admin:Brandy1980@cluster0.vbx0x.mongodb.net/cars?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, {useNewUrlParser:true});


app.use(cors());

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

const Schema = mongoose.Schema;

var carSchema = new Schema ({
    name:String,
    carType:String,
    reg:String,
    date:String,
    poster:String
});

// model created for the database 
var CarModel = mongoose.model("car", carSchema);

app.get('/api/cars', (req, res) => {

    // const mycars =[
    //     {
    //         "Name": "Kelly Shearer",
    //         "CarType": "Toyota",
    //         "Reg": "tt4154756",
    //         "Date": "28-01-21",
    //         "Picture": "https://t1-cms-1.images.toyota-europe.com/toyotaone/ieen/c-hr%201600x900_tcm-3044-1779074.jpg"
    //         },

    //         {
    //             "Name": "Eimear Broderick",
    //             "CarType": "Ford Focus",
    //             "Reg": "tt4154756",
    //             "Date": "29-01-21",
    //             "Picture": "https://www.gpas-cache.ford.com/guid/e56687dd-4a61-3d36-af0f-e664e33bf02c.png"
    //             },

    //             {
    //                 "Name": "Sarah Fahey",
    //                 "CarType": "Mini",
    //                 "Reg": "tt4154756",
    //                 "Date": "29-01-21",
    //                 "Picture": "https://upload.wikimedia.org/wikipedia/commons/7/7e/2014_MINI_Cooper_Hardtop_--_NHTSA_test_8883_-_front.jpg"
    //                 }
    // ];

    CarModel.find((err, data)=>{
        res.json(data);
    })
  
})

app.get('/api/cars/:id' , (req,res)=> {
    console.log(req.params.id);

    CarModel.findById(req.params.id, (err, data)=>{
        res.json(data);
    })
})

// post method used for user to enter data into the form and send to the database 
app.post('/api/cars', (req, res)=> {
    console.log('Car recieved');
    console.log(req.body.name);
    console.log(req.body.carType);
    console.log(req.body.reg);
    console.log(req.body.date);
    console.log(req.body.picture);

    CarModel.create({
        name:req.body.name,
        carType:req.body.carType,
        reg:req.body.reg,
        date:req.body.date,
        picture:req.body.picture
    })

    res.send('Car Added');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})