import React, { Component } from 'react';
import SearchField from './components/SearchField/SearchField.jsx';
import CategoryList from './components/CategoryList/CategoryList.jsx';
import ProductsList from './components/ProductsList/ProductsList.jsx';
import Pagination from './components/Pagination/Pagination.jsx';
import SortProducts from './components/SortProducts/SortProducts.jsx';
import data_products from './products.json';
import {HashRouter, Route, Switch} from "react-router-dom";
import {Grid, Col, Row} from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products: data_products.products,
        pageOfItems: [],
        valueinput: sessionStorage.getItem('inputvalue'),
        paginationView: true
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }
  componentWillUpdate(nextProps) {
    const currentRoute = nextProps.location.pathname;
    if(currentRoute.indexOf('/category')!==-1) {
      if(this.state.paginationView===true) {
        this.setState({paginationView: false});
      }
    } else {
      if(this.state.paginationView===false) {
        this.setState({paginationView: true});
      }
    }
  }
  componentDidMount() {
    this.handleSearch();
  }
  handleSearch(e) {
    var searchQuery =  e ? e.target.value.toLowerCase() : this.state.valueinput;
    sessionStorage.setItem('inputvalue', `${searchQuery}`);
    this.setState({valueinput: searchQuery});
    var displayedProducts = data_products.products.filter(function(el) {
        var searchValue = el.name.toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
    });
    if (displayedProducts.length === 0){
      this.setState({products: data_products.products});
    } else {
      this.setState({products: displayedProducts});
    }
  }
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
    window.scrollTo(0,0);
  }
  render() {
    const MainProducts = (props) => {
      return (
        <ProductsList pageOfItems={this.state.pageOfItems}/>
      );
    }
    const MySortProducts = (props) => {
      return (
        <SortProducts match={props.match} products={this.state.products}/>
      );
    }
    return (
      <Grid>
        <Row className="justify-content-center align-items-center">
          <Col xs={6} className="align-items-center">
            <a className="btn btn-primary mr-5" href="/#" >Main Paige</a>
          </Col>
          <Col xs={6}>
            <SearchField inputvalue={this.state.valueinput} handleSearch={this.handleSearch}/>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <CategoryList products={this.state.products}/>
          </Col>
          <Col xs={9}>
            <HashRouter>
              <Switch>
                  <Route exact path="/" render={MainProducts}/>
                  <Route path="/category/:id" render={MySortProducts} />
              </Switch>
            </HashRouter>
            
          </Col>
        </Row>
        {
          this.state.paginationView ?
          <Row className="justify-content-center">
            <Col xs={12}>
              <Pagination items={this.state.products} onChangePage={this.onChangePage}/>
            </Col>
          </Row> : <Row className="my-3"></Row>
        }
        
      </Grid>
    );
  }
}

export default App;
