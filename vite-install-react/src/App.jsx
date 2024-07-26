import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: []
    };
    this.fetchUsers();
  }

  async fetchUsers() {
    const request = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await request.json();
    const filteredData = data.map(({ name, id }) => {
      return { name, id };
    });
    this.setState({ users: filteredData });
  }

  handleClickOnListItem = async ({ id }) => {
    const request = await fetch(
      'https://jsonplaceholder.typicode.com/posts?userId=' + id
    );
    const data = await request.json();
    const styledPosts = data.map(({ title, body }) => {
      return {
        content: (
          <div>
            <h6>{title}</h6>
            <p>{body}</p>
          </div>
        ),

        title,
        body
      };
    });
    this.setState({ posts: styledPosts });
  };

  render() {
    return (
      <main className="users pt-5">
        <Container>
          <Row>
            <Col xs={4}>
              {this.state.users.length ? (
                <List
                  data={this.state.users}
                  itemToShow="name"
                  handleClick={this.handleClickOnListItem}
                />
              ) : (
                'Loading...'
              )}
            </Col>
            <Col xs={8}>
              <List data={this.state.posts} itemToShow="content" />
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default App;
