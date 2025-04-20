import { useState } from 'react';
import Post from './Post.jsx'
import classes from './PostsList.module.css'
import NewPost from './NewPost.jsx';
import Modal from './Modal.jsx';

function PostsList(){
  const [modalIsVisible, setModalIsVisible] = useState(true)
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function hideModelHandler(){
    setModalIsVisible(false);
  }

  function bodyChangeHandler(event){
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event){
    setEnteredAuthor(event.target.value);
  }

  return(
    <>
      {modalIsVisible ? (<Modal onClose={hideModelHandler}>
      <NewPost 
        onBodyChange={bodyChangeHandler} 
        onAuthorChange={authorChangeHandler}
      />
      </Modal>) : false
      }
    
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody}/>
        <Post author="Ying" body="Absolutely!"/>
      </ul>
    </>
  )
};

export default PostsList;