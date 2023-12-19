function Message(props) {
  return (
    <div className="message">
      <h1>{props.children}</h1>
      <button className="delete-button" onClick={() => props.delete(props.id)}>
        x
      </button>
    </div>
  );
}
export default Message;
