import './style.css';

const BlogPost = ({data}) => {
    return(
        <div className='data'>
        <h2>{data.title}</h2>
        <p>{data.userId}</p>
        <p>{data.body}</p>
      </div>
    )
};

export default BlogPost;