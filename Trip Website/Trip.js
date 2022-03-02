import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Trip extends Component {
    constructor() {
        super();
        this.state = {
            Startingplace: "",
            Destination: "",
            ChooseVehicycle: "",
            BrandMileage: "",
            pertrolprice: "",
            Distance: "",
            Member: "",
            Entiretotal: "",
            Fuellitre: "",
            Fuelcost: "",
            one_person_cost: "",
            Total_person_cost: ""

        }
        this.key = "";
     
    }
    MyHandler = (event) => {
        this.key = event.target.id;
        this.setState({
            [this.key]: event.target.value
        })
    }

    onClickHandler = () => {
        var output = this.state.Distance / this.state.BrandMileage
        var Fuel_cost = output * this.state.pertrolprice
        var OnePerson = this.state.Distance * 3
        var member = this.state.Member * OnePerson
        var total = Fuel_cost + member;
        this.setState({ Entiretotal: total })
        this.setState({ Fuellitre: output })
        this.setState({ Fuelcost: Fuel_cost })
        this.setState({ one_person_cost: OnePerson })
        this.setState({ Total_person_cost: member })
        console.log("StartingPlace:" + this.state.Startingplace)
        console.log("EndingPlace:" + this.state.Destination)
        console.log("ChooseVehicycle:" + this.state.ChooseVehicycle)
        console.log("Distance:" + this.state.Distance)
        console.log("Fuel Litre: " + output)
        console.log("Fuel Cost: " + Fuel_cost)
        console.log("One person Cost: " + OnePerson)
        console.log("How many person: " + this.state.Member)
        console.log("Persons Cost: " + member)
        console.log("Total Amount: " + total)

    }
            
    render() {
        return (
            <div>
                <div className='bg-info text-white text-center p-3'>
                    <h1 className='text-cxenter'>My Trip</h1>
                </div>
                <div className='container mt-3 w-50'>
                    <div>
                        <label className='form-label' for="Startingplace">Starting Place:</label>
                        <input id='Startingplace' list='Mylist' type="text" name='Startingplace' onChange={(event) => this.MyHandler(event)} className="form-control">
                        </input>
                        <datalist id='Mylist'>
                            <option value="Aranthangi"></option>
                            <option value="Pudukkotai"></option>
                            <option value="Trichy"></option>
                            <option value="Coimbatore"></option>
                            <option value="Chennai"></option>
                        </datalist>
                    </div>
                    <div>
                        <label className='form-label'>Destination:</label>
                        <input id='Destination' list="places" onChange={(event) => this.MyHandler(event)} className="form-control" type="text" ></input>
                        <datalist id='places'>
                            <option value="Bengalore"></option>
                            <option value="Salem"></option>
                            <option value="Trichy"></option>
                            <option value="Coimbatore"></option>
                            <option value="Chennai"></option>
                        </datalist>
                    </div>
                    <div>
                        <label className='form-label'>Choose vehicycle:</label>
                        <select id='ChooseVehicycle' onChange={(event) => this.MyHandler(event)} className="form-control dropdown-toggle" name='4 wheelers'>
                            <option>Car</option>
                            <option>Van</option>
                            <option>Bus</option>
                        </select>
                    </div>
                    <div>
                        <label className='form-label' for="cars">Brand Name:</label>
                        <select id='BrandMileage' onChange={(event) => this.MyHandler(event)} className="form-select dropdown-toggle" name='cars'>
                            <option value="17">Maruthi mileage-17 </option>
                            <option value="19">volvo mileage-19</option>
                            <option value="14">Honda mileage-14 </option>
                            <option value="23">Tata-Ace mileage-23</option>
                            <option value="9"> Bus mileage-9</option>
                        </select>
                    </div>
                    <div>
                        <label className='form-label'>Distance:</label>
                        <input id='Distance' onChange={(event) => this.MyHandler(event)} className="form-control" type="text">

                        </input>
                    </div>

                    <div>
                        <label className='form-label'>How many Members:</label>
                        <input id="Member" onChange={(event) => this.MyHandler(event)} className="form-control" type="number"></input>
                    </div>

                    <div>
                        <label className='form-label'>Petrol Price:</label>
                        <select id='pertrolprice' onChange={(event) => this.MyHandler(event)} className="form-select" type="text" >
                            <option value="102"> Today Fuel perlitre-102</option>
                            <option value="105"> Today PowerFuel perlitre-105</option>
                        </select>
                    </div>
                    <button style={{position:"relative",left:"270px"}}  onClick={() => this.onClickHandler()} type='button' className='mt-3 btn btn-success btn-lg'>
                    <Link to={"/userdetails" + "/" + this.state.Startingplace + "/" + this.state.Destination + "/" + this.state.ChooseVehicycle + "/" + this.state.Entiretotal + '/' + this.state.Distance + '/' + this.state.BrandMileage + '/' + this.state.pertrolprice + '/' + this.state.Member + '/' + this.state.Fuellitre + '/' + this.state.Fuelcost + '/' + this.state.one_person_cost + '/' + this.state.Total_person_cost} className="text-white text-decoration-none">Calculate</Link>
                    </button>
                </div>
            </div>

        )
    }
}
