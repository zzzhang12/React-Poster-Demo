import { useState } from 'react';
import Post from './Post.jsx'
import classes from './PostsList.module.css'
import NewPost from './NewPost.jsx';
import Modal
 from './Modal.jsx';
function PostsList(){
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event){
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event){
    setEnteredAuthor(event.target.value);
  }

  return(
    <>
    <Modal>
      <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
    </Modal>
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody}/>
        <Post author="Ying" body="Absolutely!"/>
      </ul>
    </>
  )  
};

export default PostsList;