// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Post from './components/Post';

function App() {
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const request = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        const data = await request.json();
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error('Received data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    }

    fetchPosts();
  }, []);

  const handleClickOnPostItem = async ({ id }) => {
    try {
      const request = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await request.json();
      setPost(data);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };

  return (
    <main className="users pt-5">
      <Container>
        <Row>
          <Col xs={6}>
            {posts.length ? (
              <Post
                data={posts}
                itemToShow="title"
                handleClick={handleClickOnPostItem}
              />
            ) : (
              'Loading...'
            )}
          </Col>
          <Col xs={6}>
            {post && (
              <ul>
                <li className="posts_single-post" data-post-id={post.id}>
                  {post.id}
                  <h3 className="posts__post-title">{post.title}</h3>
                  <p className="posts__post-description">{post.body}</p>
                </li>
              </ul>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default App;
