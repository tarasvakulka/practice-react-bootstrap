import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import './Product.css';

class Product extends Component {
  render() {
    return (
        <Panel>
          <Panel.Body>
            <img src={this.props.img}/>
            <a target="_blank" href={this.props.link}><i class="material-icons">add</i></a>
          </Panel.Body>
          <Panel.Footer>
            <p>{ this.props.name }</p>
            <p>{this.props.category}</p>
            <p>{this.props.price}</p>
            <p>{this.props.asin}</p>
          </Panel.Footer>
        </Panel>
    );
  }
}

export default Product;