import './App.css';
import Header from './components/Header';
import blogData from '../src/data/data.json';
import BlogPosts from './components/BlogPosts';

function App() {
  return (
    <div>
      <Header />
      <BlogPosts posts={blogData}/>
    </div>
  )
}

export default App;
