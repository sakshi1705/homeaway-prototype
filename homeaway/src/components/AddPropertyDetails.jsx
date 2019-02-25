import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import navbar_new from "./navbar_new";
import cookie from "react-cookies";


class AddPropertyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owneremail:"",
      country: "",
      address: "",
      Unit: "",
      City: "",
      State: "",
      Postal: "",
      Headline: "",
      Pdescription: "",
      Ptype: "",
      Bedrooms: "",
      Accomodates: "",
      bathrooms: "",
      minimumstay: "",
      Baseprice: "",
      Pricepernight: ""
    };
    this.countryChangeHandler = this.countryChangeHandler.bind(this);
    this.addressChangeHandler = this.addressChangeHandler.bind(this);
    this.cityChangeHandler = this.cityChangeHandler.bind(this);
    this.stateChangeHandler = this.stateChangeHandler.bind(this);
    this.postalChangeHandler = this.postalChangeHandler.bind(this);
    this.unitChangeHandler = this.unitChangeHandler.bind(this);

    this.PricepernightChangeHandler = this.PricepernightChangeHandler.bind(this);
    this.basepriceChangeHandler = this.basepriceChangeHandler.bind(this);
    this.minimumstayChangeHandler = this.minimumstayChangeHandler.bind(this);
    this.bathroomsChangeHandler = this.bathroomsChangeHandler.bind(this);
    this.accomodatesChangeHandler = this.accomodatesChangeHandler.bind(this);
    this.bedroomsChangeHandler = this.bedroomsChangeHandler.bind(this);
    this.ptypeChangeHandler = this.ptypeChangeHandler.bind(this);
    this.pdescriptionChangeHandler = this.pdescriptionChangeHandler.bind(this);
    this.headlineChangeHandler = this.headlineChangeHandler.bind(this);
  }

  bathroomsChangeHandler = e => {
    this.setState({
      bathrooms: e.target.value
    });
  };

  accomodatesChangeHandler = e => {
    this.setState({
      Accomodates: e.target.value
    });
  };

  PricepernightChangeHandler = e => {
    this.setState({
      Pricepernight: e.target.value
    });
  };

  basepriceChangeHandler = e => {
    this.setState({
      Baseprice: e.target.value
    });
  };

  minimumstayChangeHandler = e => {
    this.setState({
      
    minimumstay: e.target.value
    });
  };

  bedroomsChangeHandler = e => {
    this.setState({
      Bedrooms: e.target.value
    });
  };

  ptypeChangeHandler = e => {
    this.setState({
      Ptype: e.target.value
    });
  };

  pdescriptionChangeHandler = e => {
    this.setState({
      Pdescription: e.target.value
    });
  };

  headlineChangeHandler = e => {
    this.setState({
      Headline: e.target.value
    });
  };

  countryChangeHandler = e => {
    this.setState({
      country: e.target.value
    });
  };

  addressChangeHandler = e => {
    this.setState({
      address: e.target.value
    });
  };
  cityChangeHandler = e => {
    this.setState({
      City: e.target.value
    });
  };
  unitChangeHandler = e => {
    this.setState({
      Unit: e.target.value
    });
  };
  postalChangeHandler = e => {
    this.setState({
      Postal: e.target.value
    });
  };
  stateChangeHandler = e => {
    this.setState({
      State: e.target.value
    });
  };


  handleSubmit = () => {

    const data = {
      owneremail:this.state.owneremail,
      country: this.state.country,
      address: this.state.address,
      Unit: this.state.Unit,
      City: this.state.City,
      State: this.state.State,
      Postal: this.state.Postal,
      Headline: this.state.Headline,
      Pdescription: this.state.Pdescription,
      Ptype: this.state.Ptype,
      Bedrooms: this.state.Bedrooms,
      Accomodates: this.state.Accomodates,
      bathrooms: this.state.bathrooms,
      minimumstay: this.state.minimumstay,
      Baseprice: this.state.Baseprice,
      Pricepernight: this.state.Pricepernight
      
    };

  };
  render() {
    
   
    return (
      <React.Fragment>
      
      <navbar_new/>


      

      <div className="owner-container">

        <div className="row">
          <div className="col col-md-1 ">
            <ul className="nav nav-pills nav-stacked">
              <li className="active"  >
                <a data-toggle="tab" href="#location">Location</a>
              </li>
              <li >
                <a data-toggle="tab" href="#details">Details</a>
              </li>
              
              <li >
                <a data-toggle="tab" href="#pricing"> Pricing</a>
              </li>

            </ul>
          </div>
          <div className="col">
            <div class="container">
              <div className="tab-content">
                <div id="location" className="tab-pane fade in active">
                  <div className="panel-body">
                    <h2>Location</h2>
                    <form className="location-form">
                      <div className="form-group">
                        <label>country</label>
                        <input id="country" type="text" value={this.state.country} onChange={this.countryChangeHandler} className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Street address</label>
                        <input id="address" type="text" value={this.state.address} onChange={this.addressChangeHandler} className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Unit, Suite, Building, Etc.</label>
                        <input id="unit" type="text" value={this.state.Unit} onChange={this.unitChangeHandler} className="form-control" />
                      </div>

                      <div className="form-group">
                        <label>City</label>
                        <input id="city" type="text" value={this.state.City} onChange={this.cityChangeHandler} className="form-control" />
                      </div>

                      <div className="form-group">
                        <label>State</label>
                        <input id="state" type="text" value={this.state.State} onChange={this.stateChangeHandler} className="form-control" />
                      </div>

                      <div className="form-group">
                        <label>Postal Code</label>
                        <input id="postal" type="text" value={this.state.Postal} onChange={this.postalChangeHandler} className="form-control" />
                      </div>
                    </form>
                  </div>
                </div>

                <div id="details" className="tab-pane fade">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <h2>Describe your property</h2>
                      <hr />
                      <form className="details-form">
                        <div className="form-group">
                          <label>Headline</label>
                          <input id="headline" type="text" value={this.state.Headline} onChange={this.headlineChangeHandler} className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Property description</label>
                          <input id="pdescription" value={this.state.Pdescription} onChange={this.pdescriptionChangeHandler} type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Property type</label>
                          <input id="ptype" value={this.state.Ptype} onChange={this.ptypeChangeHandler} type="text" className="form-control" />
                        </div>

                        <div className="form-group">
                          <label>Bedrooms</label>
                          <input id="bedrooms" value={this.state.Bedrooms} onChange={this.bedroomsChangeHandler} type="text" className="form-control" />
                        </div>

                        <div className="form-group">
                          <label>Accomodates</label>
                          <input id="accomodates" value={this.state.Accomodates} onChange={this.accomodatesChangeHandler} type="text" className="form-control" />
                        </div>

                        <div className="form-group">
                          <label>Bathrooms</label>
                          <input id="bathrooms" value={this.state.bathrooms} onChange={this.bathroomsChangeHandler} type="text" className="form-control" />
                        </div>

                      </form>
                    </div>
                  </div>
                </div>
                <div id="pricing" className="tab-pane fade">
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <h2>Pricing</h2>
                      <form className="details-form">
                        <div className="form-group">
                          <label>minimum Stay</label>
                          <input id="headline" value={this.state.minimumstay} onChange={this.minimumstayChangeHandler} type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Base Price</label>
                          <input id="pdescription" value={this.state.Baseprice} onChange={this.basepriceChangeHandler} type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label>Per Night</label>
                          <input id="ptype" type="text" value={this.state.Pricepernight} onChange={this.PricepernightChangeHandler} className="form-control" />
                        </div>
                        <hr />
                        <button className="btn btn-primary">Cancel</button>
                        <button className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
                      </form>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        
      </div>
      </div>
      </React.Fragment>
    );
  }
}

export default AddPropertyDetails;