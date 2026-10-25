import { useEffect, useReducer, useState } from 'react';
import { postsReducer, initialState } from './reducer/postsReducer';
import { fetchPosts } from './api/postsApi';
import PostList from './components/PostList';
import FilterForm from './components/FilterForm';

const App = () => {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    let isMounted = true;

    const getPosts = async () => {
      dispatch({ type: 'FETCH_START' });
      try {
        const data = await fetchPosts();
        if (isMounted) {
          dispatch({ type: 'FETCH_SUCCESS', payload: data });
        }
      } catch (error) {
        if (isMounted) {
          dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
      }
    };

    getPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredPosts = state.posts.filter(post =>
    post.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Post Dashboard</h1>
      <FilterForm filterText={filterText} onFilterChange={setFilterText} />
      
      {state.loading && <div>Loading posts...</div>}
      {state.error && <div>Error: {state.error}</div>}
      {!state.loading && !state.error && filteredPosts.length === 0 && (
        <div>No posts found.</div>
      )}
      {!state.loading && !state.error && filteredPosts.length > 0 && (
        <PostList posts={filteredPosts} />
      )}
    </div>
  );
};

export default App;