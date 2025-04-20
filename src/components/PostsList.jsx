import Post from './Post.jsx'
import classes from './PostsList.module.css'
import NewPost from './NewPost.jsx';
import Modal from './Modal.jsx';

function PostsList({isPosting, onStopPosting}){

  return(
    <>
      {isPosting ? (<Modal onClose={onStopPosting}>
      <NewPost 
        onCancel={onStopPosting}
      />
      </Modal>) : false
      }
    
      <ul className={classes.posts}>
        <Post author="Ying" body="Absolutely!"/>
      </ul>
    </>
  )
};

export default PostsList;