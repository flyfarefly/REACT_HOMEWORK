import { Children } from 'react';

export default function ListGroup({ children }) {
  return (
    <ul className="list-group">
      {Children.map(children, (child) => (
        <li className="list-group-item" key={child.id}>
          {child}
        </li>
      ))}
    </ul>
  );
}
