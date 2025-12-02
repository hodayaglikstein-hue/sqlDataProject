function CommentsData(props) {
  return (
    <>
      {props.comments.map((comment) => (
        <div key={comment.id}>
          <h2>
            {comment.writer} - {comment.title}{" "}
          </h2>
          <h3>{comment.body}</h3>
          <h4>Comment Id: {comment.id}</h4>
        </div>
      ))}
    </>
  );
}

export default CommentsData;
