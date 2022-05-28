type ButtonClearProps = {
    onClear: ()=>void
}

const ButtonClear = ({
  onClear,
}:ButtonClearProps) => (
  <button
    className="button"
    onClick={() => {
      onClear();
    }}
  >
    Clear
  </button>

);

export default ButtonClear;
