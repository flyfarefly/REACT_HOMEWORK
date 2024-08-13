import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../store/contactsSlice';
import { Link } from 'react-router-dom';
import { Button, Container, List, ListItem, ListItemText } from '@mui/material';
import { css } from '@emotion/react';

const containerStyle = css`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const titleStyle = css`
  text-align: center;
  color: #333;
`;

const buttonStyle = css`
  margin: 10px;
`;

const listItemStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <Container css={containerStyle}>
      <h1 css={titleStyle}>Contact List</h1>
      <Link to="/add">
        <Button variant="contained" color="primary" css={buttonStyle}>
          Add Contact
        </Button>
      </Link>
      <List>
        {contacts.map((contact) => (
          <ListItem key={contact.id} css={listItemStyle}>
            <ListItemText primary={contact.name} secondary={contact.phone} />
            <div>
              <Link to={`/edit/${contact.id}`}>
                <Button variant="contained" color="secondary" css={buttonStyle}>
                  Edit
                </Button>
              </Link>
              <Button
                variant="contained"
                color="error"
                css={buttonStyle}
                onClick={() => handleDelete(contact.id)}>
                Delete
              </Button>
            </div>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ContactList;
