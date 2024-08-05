import routeNames from './routeNames';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Posts from '../pages/Posts';
import SinglePost from '../pages/SinglePost';
import EditPost from '../pages/EditPost';
import CreatePost from '../pages/CreatePost';

const routerObjects = [
  {
    id: 0,
    path: routeNames.notFound,
    element: NotFound
  },
  {
    id: 1,
    path: routeNames.home,
    element: Home
  },
  {
    id: 2,
    path: routeNames.posts,
    element: Posts
  },
  {
    id: 3,
    path: routeNames.singlePost,
    element: SinglePost
  },
  {
    id: 4,
    path: routeNames.createPost,
    element: CreatePost
  },
  {
    id: 5,
    path: routeNames.editPost,
    element: EditPost
  }
];
export default routerObjects;
