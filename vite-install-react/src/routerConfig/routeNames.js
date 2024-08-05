const routeNames = Object.freeze({
  notFound: '*',
  home: '/',
  posts: '/posts',
  singlePost: 'post/ :postID',
  createPost: '/createPost',
  editPost: '/editPost/:postID'
});
export default routeNames;
