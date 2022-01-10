export default function Item(props) {
  return (
    <div>
      <li className="border d-flex justify-content-between align-items-center p-2 m-2">
        <div className="p-3">{props.text}</div>
        <button
          className="btn btn-danger p2-h50"
          onClick={() => props.deleteToDoFunction(props.id)}
        >
          Delete
        </button>
      </li>
    </div>
  );
}
