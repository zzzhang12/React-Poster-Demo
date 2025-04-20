import Post from './Post.jsx'
import classes from './PostsList.module.css'
import NewPost
 from './NewPost.jsx';
function PostsList(){
    return(
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Zhang" body="Learning React is fun!"/>
                <Post author="Ying" body="Absolutely!"/>
            </ul>
        </>
    )
}

export default PostsList;