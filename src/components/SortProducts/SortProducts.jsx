import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from "../Product/Product.jsx";
import './SortProducts.css';
import {Row, Col} from 'react-bootstrap';

class SortProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortproducts: []
    }
  }
  render() {
    let products = this.props.products;
    let temp_products = [];
    for (let i=0; i<products.length; i++){
        if(products[i].bsr_category===this.props.match.params.id){
            temp_products.push(products[i]);
        }
    }
    var temp_key = 0;
    return (
        <Row className="product-list">
          { 
            temp_products.map(product =>
                <Col key={temp_key++} xs={12} md={4}>
                  <Product 
                    name={product.name} 
                    category={product.bsr_category}
                    price={product.price}
                    asin={product.asin}
                    img={product.img}  
                    link={product.link}
                  />
                </Col>
              )
          }
        </Row>
    );
  }
}

SortProducts.propTypes = {
    products: PropTypes.array
}
export default SortProducts;