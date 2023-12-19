export default function Message(props) {
  console.log(props);
  return (
    <div className="message">
      <h1>{props.inputText}</h1>
      <button
        className="delete-button"
        onClick={() => props.deleteMessage(props.id)}
      >
        x
      </button>
    </div>
  );
}
