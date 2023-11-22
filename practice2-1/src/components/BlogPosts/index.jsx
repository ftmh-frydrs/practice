import './style.css';
import BlogPost from './BlogPost';

const BlogPosts = ({ posts }) => {
  return (
    <div className='blog-post'>
      {posts.map((post) => (
       <BlogPost key={post.id} id={post.id} data={post}/>
      ))}
    </div>
  );
};

export default BlogPosts;