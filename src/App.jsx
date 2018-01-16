import React, { Component } from 'react';
import Product from './components/Product/Product.jsx';
import SearchField from './components/SearchField/SearchField.jsx';
import ProductsList from './components/ProductsList/ProductsList.jsx';
import Pagination from './components/Pagination/Pagination.jsx';
import data_products from './products.json';
import {Grid} from 'react-bootstrap';
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
        <SearchField handleSearch={this.handleSearch}/>
        <ProductsList pageOfItems={this.state.pageOfItems}/>
        <Pagination items={this.state.products} onChangePage={this.onChangePage}/>
      </Grid>
    );
  }
}

export default App;
