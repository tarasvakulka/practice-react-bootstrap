import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from "../Product/Product.jsx"
import {Row, Col} from 'react-bootstrap';

class ProductsList extends Component {
  render() {
    return (
        <Row>
          {
            this.props.pageOfItems.map(product => 
              <Col xs={12} md={4}>
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

ProductsList.PropTypes = {
    pageOfItems: PropTypes.array
}
export default ProductsList;