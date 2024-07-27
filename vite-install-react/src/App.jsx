import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Post from './components/Post';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      posts: []
    };
    this.fetchPosts();
  }

  async fetchPosts() {
    try {
      const request = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await request.json();
      if (Array.isArray(data)) {
        this.setState({ posts: data });
      } else {
        console.error('Received data is not an array:', data);
      }
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  }

  handleClickOnPostItem = async ({ id }) => {
    try {
      const request = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await request.json();
      this.setState({ post: data });
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };

  render() {
    return (
      <main className="users pt-5">
        <Container>
          <Row>
            <Col xs={6}>
              {this.state.posts.length ? (
                <Post
                  data={this.state.posts}
                  itemToShow="title"
                  handleClick={this.handleClickOnPostItem}
                />
              ) : (
                'Loading...'
              )}
            </Col>
            <Col xs={6}>
              {this.state.post && (
                <ul>
                  <li
                    className="posts_single-post"
                    data-post-id={this.state.post.id}>
                    {this.state.post.id}
                    <h3 className="posts__post-title">
                      {this.state.post.title}
                    </h3>
                    <p className="posts__post-description">
                      {this.state.post.body}
                    </p>
                  </li>
                </ul>
              )}
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default App;
