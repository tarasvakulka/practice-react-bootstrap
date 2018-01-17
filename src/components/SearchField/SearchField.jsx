import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Col, ControlLabel, FormControl} from 'react-bootstrap';

class SearchField extends Component {
  render() {
    return (
        <Row className="justify-content-center align-items-center my-3">
          <Col xs={6}>
            <ControlLabel>Search:</ControlLabel>
          </Col>
          <Col xs={6}>
            <FormControl
              type="text"
              placeholder="Enter text"
              onChange={this.props.handleSearch}
            />
          </Col>
        </Row>
    );
  }
}

SearchField.propTypes = {
    onChange: PropTypes.func
}
export default SearchField;