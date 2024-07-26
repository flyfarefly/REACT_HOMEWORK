import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.fetchPosts();
  }

  async fetchPosts() {
    const request = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await request.json();
    const styledPosts = data.map(({ id, title, body }) => {
      return {
        content: (
          <li className="posts_single-post" data-post-id={id}>
            <h3 className="posts__post-title">{title}</h3>
            <p className="posts__post-description">{body}</p>
          </li>
        ),
        title,
        body
      };
    });
    this.setState({ posts: styledPosts });
  }

  render() {
    return (
      <main className="users pt-5">
        <Container>
          <Row>
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
