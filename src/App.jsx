import React, { Component } from 'react';
import Product from './components/Product/Product.jsx';
import Pagination from './components/Pagination/Pagination.jsx';
import data_products from './products.json';
import {Grid, Row, Col, ControlLabel, FormControl} from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products: data_products.products,
        pageOfItems: []
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }
  handleSearch(e) {
    var searchQuery = e.target.value.toLowerCase();

    var displayedProducts = data_products.products.filter(function(el) {
        var searchValue = el.name.toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
    });
    
    this.setState({
      products: displayedProducts
    });
  }
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
    window.scrollTo(0,0);
  }
  render() {
    return (
      <Grid>
        <Row className="justify-content-center align-items-center my-3">
          <Col xs={6}>
            <ControlLabel>Search:</ControlLabel>
          </Col>
          <Col xs={6}>
            <FormControl
              type="text"
              placeholder="Enter text"
              onChange={this.handleSearch}
            />
          </Col>
        </Row>
        <Row>
          {
            this.state.pageOfItems.map(product => 
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
        <Row className="justify-content-center">
          <Col xs={12}>
            <Pagination items={this.state.products} onChangePage={this.onChangePage}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
