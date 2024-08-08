import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const CustomTable = ({
  headers,
  data,
  onRowClick = null,
  onHeaderClick = null
}) => {
  const generateHeaders = () => {
    return headers.map((item) => {
      const { title, width } = item;
      return (
        <th
          key={uuidv4()}
          onClick={() => (onHeaderClick ? onHeaderClick(item) : null)}
          style={width ? { width } : {}}>
          {title}
        </th>
      );
    });
  };

  const generateData = () => {
    return data.map((row) => {
      return (
        <tr
          key={uuidv4()}
          onClick={() => (onRowClick ? onRowClick(row) : null)}>
          {headers.map(({ key }) => {
            return <td key={uuidv4()}>{row[key]}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <Table>
      <thead>
        <tr>{generateHeaders()}</tr>
      </thead>
      <tbody>{generateData()}</tbody>
    </Table>
  );
};

CustomTable.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      width: PropTypes.string.isRequired
    })
  ),
  data: PropTypes.array.isRequired,
  onRowClick: PropTypes.func,
  onHeaderClick: PropTypes.func
};

export default CustomTable;
