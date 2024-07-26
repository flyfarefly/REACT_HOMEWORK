import React, { Component } from 'react';
import styles from './usersList.module.css';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

class List extends Component {
  render() {
    const { data, itemToShow: key } = this.props;
    return (
      <ListGroup>
        {data.map((item) => {
          return <ListGroup.Item key={uuidv4()}>{item[key]}</ListGroup.Item>;
        })}
      </ListGroup>
    );
  }
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  itemToShow: PropTypes.string.isRequired
};
List.defaultProps = {};

export default List;
