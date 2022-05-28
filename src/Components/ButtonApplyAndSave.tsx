type ButtonApplyAndSaveProps = {
    onApplyandSave:() => void
}

const ButtonApplyAndSave = ({
  onApplyandSave,
}:ButtonApplyAndSaveProps) => (
  <button
    className="button"
    onClick={() => {
      onApplyandSave();
    }}
  >
    Apply and Save
  </button>
);

export default ButtonApplyAndSave;
