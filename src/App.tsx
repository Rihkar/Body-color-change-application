import './Styles/reset.scss';
import './App.scss';
import { useEffect, useRef, useState } from 'react';
import validateColor from 'validate-color';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonApply from './Components/ButtonApply';
import ButtonApplyAndSave from './Components/ButtonApplyAndSave';
import ButtonClear from './Components/ButtonClear';
import ButtonDelete from './Components/ButtonDelete';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState<string[]>([]);
  const [bodyColor, setbodyColor] = useState('white');
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  document.body.style.backgroundColor = bodyColor;

  const notify = () => {
    toast('Color added!');
  };

  const removeOutputValue = (colorToRemoveIndex: number) => (
    setOutputValue(outputValue.filter((_, index) => index !== colorToRemoveIndex))
  );

  return (
    <div className="app">
      <div className="input-and-buttons">
        <input
          className={error ? 'input-not-valid' : ''}
          ref={inputRef}
          value={inputValue}
          placeholder="Color input"
          type="text"
          onChange={(e) => {
            setInputValue(e.target.value);
            setError(false);
          }}
        />
        <ButtonApply
          onApply={() => {
            if (validateColor(inputValue)) {
              setbodyColor(inputValue);
              setInputValue('');
              notify();
            } else {
              setError(true);
            }
          }}
        />
        <ButtonApplyAndSave
          onApplyandSave={() => {
            if (validateColor(inputValue)) {
              setbodyColor(inputValue);
              setOutputValue([...outputValue, inputValue]);
              setInputValue('');
              notify();
            } else {
              setError(true);
            }
          }}
        />
        <ButtonClear
          onClear={() => {
            setInputValue('');
          }}
        />
      </div>

      {outputValue.length > 0 && (
      <div
        className="output-container"
      >
        {outputValue.map((color, index) => (
          <div
            className="output"
            key={Math.random()}
          >
            <span
              className="output-text"
             >
              {color}
            </span>
            <ButtonDelete
              onDelete={() => removeOutputValue(index)}
            />
          </div>
        ))}
      </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default App;
