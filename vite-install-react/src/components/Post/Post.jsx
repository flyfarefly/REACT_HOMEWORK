// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import styles from './usersPost.module.css';
import { v4 as uuidv4 } from 'uuid';

function Post({ data, itemToShow: key, handleClick }) {
  return (
    <ListGroup>
      {data.map((item) => (
        <ListGroup.Item key={uuidv4()} onClick={() => handleClick(item)}>
          {item[key]}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

Post.propTypes = {
  data: PropTypes.array.isRequired,
  itemToShow: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

export default Post;
