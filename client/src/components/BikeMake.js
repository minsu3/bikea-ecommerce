import React, { Component } from 'react';
import Nav from "react-bootstrap/Nav";
// import BikeDetails from './BikeDetails';


class BikeMake extends Component {
  render() {
    return(
      <div className="brands">
          <Nav.Link href={"/bikes/"+this.props.bikemake.brand}>
            <h3>
              <img src={this.props.img} alt=""/>
            </h3>
          </Nav.Link>
      </div>
    )
  }
}

export default BikeMake;