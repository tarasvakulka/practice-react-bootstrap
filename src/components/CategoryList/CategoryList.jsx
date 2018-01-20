import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem} from 'react-bootstrap';

class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }
    componentWillUpdate(nextProps, nextState) {
        if(this.props.products !== nextProps.products) {
            let products = nextProps.products;
            let temp_categories = [];
            for (let i=0; i<products.length; i++){
                if(!temp_categories.find(category => category===products[i].bsr_category)){
                    temp_categories.push(products[i].bsr_category);
                }
            }
            this.setState({categories: temp_categories});
        }
    }
    
    render() {
        var temp_key = 0;
        return (
                <ListGroup>
                { 
                    this.state.categories.map(category =>
                        <ListGroupItem key={temp_key++} ><a href={`#category/${category}`}>{category}</a></ListGroupItem>
                    )
                }
                </ListGroup>
        
        );
    }
}

CategoryList.propTypes = {
    products: PropTypes.array
}
export default CategoryList;