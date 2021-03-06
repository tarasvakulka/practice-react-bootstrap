import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from "../Product/Product.jsx";
import './ProductList.css';
import {Row, Col} from 'react-bootstrap';

class ProductsList extends Component {
  render() {
    var temp_key = 0;
    return (
        <Row className="product-list">
          { 
            this.props.pageOfItems.map(product =>
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

ProductsList.propTypes = {
    pageOfItems: PropTypes.array
}
export default ProductsList;