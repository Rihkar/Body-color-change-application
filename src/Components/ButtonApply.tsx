type ButtonApplyProps = {
    onApply:() => void
}

const ButtonApply = ({
  onApply,
}:ButtonApplyProps) => (
  <button
    className="button"
    onClick={() => {
      onApply();
    }}
  >
    Apply
  </button>

);

export default ButtonApply;
