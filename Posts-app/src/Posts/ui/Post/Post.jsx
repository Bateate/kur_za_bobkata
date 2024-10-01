import classes from "./Post.module.css";

function Post({ author, body }) {
  return (
    <div className={classes.post}>
      <h2 className={classes.author}>{author}</h2>
      <h3 className={classes.text}>{body}</h3>
    </div>
  );
}

export default Post;
