import React, { useEffect, useState } from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import CustomTable from '../../components/CustomTable';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPosts(await response.json());
    };
    fetchPosts();
  }, []);

  return (
    <BaseTemplate>
      <CustomTable></CustomTable>
    </BaseTemplate>
  );
}

export default Home;
