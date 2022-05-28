type ButtonDeleteProps = {
    onDelete: ()=> void
}

const ButtonDelete = ({
  onDelete,
}:ButtonDeleteProps) => (
  <button
    onClick={() => onDelete()}
    className="button-delete"
  >
    x
  </button>
);

export default ButtonDelete;
