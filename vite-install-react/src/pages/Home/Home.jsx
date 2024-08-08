import React, { useEffect, useState } from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import CustomTable from '../../components/CustomTable';
import { useNavigate } from 'react-router-dom';
import routeNames from '../../routerConfig/routeNames';

const tableHeaders = [
  {
    title: `ID`,
    key: 'id',
    width: '5%'
  },
  {
    title: 'userId',
    key: 'userId',
    width: '10%'
  },
  {
    title: 'Title',
    key: 'title',
    width: '25%'
  },
  {
    title: 'body',
    key: 'body',
    width: '60%'
  }
];

const Home = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const req = await fetch('https://jsonplaceholder.typicode.com/posts');
      const resp = await req.json();
      setPosts(resp);
    };
    fetchPosts();
  }, []);

  const handleRowClick = (data) => {
    navigate(routeNames.posts + '/' + data.id);
  };

  return (
    <BaseTemplate title="List of Posts" className="my-5">
      <div className="mt-5">
        {posts.length ? (
          <CustomTable
            headers={tableHeaders}
            data={posts}
            onRowClick={handleRowClick}
          />
        ) : (
          'Loading...'
        )}
      </div>
    </BaseTemplate>
  );
};

export default Home;
